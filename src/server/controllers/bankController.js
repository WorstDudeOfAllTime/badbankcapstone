const dbo = require('./../db/conn');

exports.getBalance = async (req, res) => {
  let db_connect = dbo.getDb();
  const accountArray = []
  const savingsArray = []
  const collection = db_connect.collection('transactions');
  const savingsList = [
    {
      $match: {
        type: 'savings'
      }
    }  
  ]
  const pipeline = [
    {
      $match: {
        type: 'checking'
      }
    }, {
      $group: {
        _id: 'checkingBalance', 
        checkingBalance: {
          $sum: '$amount'
        }
      }
    }
  ];
  const pipelineTwo = [
    {
      $match: {
        type: 'savings'
      }
    }, {
      $group: {
        _id: 'savingsBalance', 
        savingsBalance: {
          $sum: '$amount'
        }
      }
    }
  ];
  const aggCursor = collection.aggregate(pipeline);
  for await (const doc of aggCursor) {
    accountArray.push(doc)
  }
  const aggCursorTwo = collection.aggregate(pipelineTwo);
  for await (const doc of aggCursorTwo) {
    accountArray.push(doc)
  }
  const aggCursorThree = collection.aggregate(savingsList);
  for await(const doc of aggCursorThree){
    savingsArray.push(doc);
  }

  res.send(savingsArray);
}

exports.findAccount = (req, res) => {
  let id = { _id: ObjectId(req.body._id) };
  let db_connect = dbo.getDb();
  db_connect.collection('accounts').findOne(id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

}

exports.loginUser = (req, res) => {
  let loginInfo = { email: req.params.email, password: req.params.password };
  console.log(loginInfo);
  let db_connect = dbo.getDb();
  db_connect.collection('users').findOne(loginInfo, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}
exports.deleteAll = (req, res) => {
  let db_connect = dbo.getDb();
  db_connect.collection('transactions').deleteMany({});
  db_connect.collection('users').deleteMany({});
  db_connect.collection('accounts').deleteMany({});
  res.status(200).end();
}

exports.createUser = (req, res) => {
  const email = 'krisbertolino@gmail.com';
  const name = 'Kris Bertolino';
  const password = faker.internet.password();
  const accountType = ['checking', 'savings'];
  let transArray = [];
  const personObj = {
    name: name,
    email: email,
    password: password,
  };
  for (let i = 0; i <= 10; i++) {
    let transactionObj = {
      user: 'krisbertolino@gmail.com',
      type: accountType[Math.floor(Math.random() * accountType.length)],
      amount: parseFloat(faker.finance.amount(-6000, 10000)),
      date: new Date(),
    };
    transArray.push(transactionObj);
  }
  let savAccountObj = {
    email: email,
    type: 'savings',
    date: new Date(),
  };
  let chkAccountObj = {
    email: email,
    type: 'checking',
    date: new Date(),
  };

  let db_connect = dbo.getDb();
  db_connect.collection('users').insertOne(personObj, (err, response) => {
    if (err) throw err;
  });
  db_connect.collection('accounts').insertOne(savAccountObj, (err, response) => {
    if (err) throw err;
  });
  db_connect.collection('accounts').insertOne(chkAccountObj, (err, response) => {
    if (err) throw err;
  });
  db_connect.collection('transactions').insertMany(transArray, (err, response) => {
    if (err) throw err;
    else {
    }
  });
  res.end();
}