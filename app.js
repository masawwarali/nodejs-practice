// require('dotenv').config()
// const express  = require("express")
// const mongoose = require("mongoose");
// const app      = express();

// // // const userModel   = require('./models/productModel');



// // // //CONNECTION OF MONGODB DATABASE
// // // mongoose.set('strictQuery', true);
// // // //mongoose.set('useNewUrlParser', false);
// // // mongoose.connect(`mongodb://127.0.0.1:27017/buyume`, { useNewUrlParser: true },  (err, res)=>{
// // //      if(err){
// // //         console.log(err)
// // //      }else{
// // //         console.log('mongo connected successfully')
// // //      }
// // // })


// // // //==========================Request Console=======================//

// // // app.all("*", (req, res, next) => {
  
// // //     let obj = {
// // //       Host: req.headers.host,
// // //       ContentType: req.headers['content-type'],
// // //       Url: req.originalUrl,
// // //       Method: req.method,
// // //       Query: req.query,
// // //       Body: req.body,
// // //       Parmas: req.params[0]
// // //     }
// // //     console.log("Common Request is===========>", [obj])
// // //     next();
// // //   });


// // // //IF YOU IMPLEMENT ROUTING ON OTHER FILE 
// // // const adminRoutes = require('./routes/admin');
// // // app.use('/api/v1/admin', adminRoutes);


// // // app.get('/getApi', function(req, res){
// // //    // console.log('dvfdv')
// // //    res.send('work is in progress')
// // // })



// // // app.post('/postApi', (req, res)=>{
// // //    res.send('working in post api');
// // //    console.log('working for msali')
// // // })


// // // app.get('/getData', async(req, res)=>{


// // //     try{
// // //         const data = {
// // //                         "name":"ali",
// // //                         "mobile": 9927808068,
// // //                         "email":"msali0gmail.com"
// // //                      }

// // //               const userdata =   await  userModel.find();

// // //              // console.log(userdata)

// // //         res.send(userdata);

// // //     }catch(err){
// // //         res.send(err)
// // //     }


// // // })




// // // const port = 9800;

// // // app.listen(port, function(){
// // //     console.log(`app is running on ${port} port`);
// // // });


// // // const originalObject = {
// // //     name: 'John',
// // //     hobbies: ['reading', 'painting'],
// // //     address: {
// // //       city: 'New York',
// // //       country: 'USA'
// // //     }
// // //   };
  
// // //   // Shallow copy
// // //   const shallowCopyObject = { ...originalObject };
  
// // //   // Deep copy using a library (lodash)
// // //   const deepCopyObject = _.cloneDeep(originalObject);
  
// // //   // Modify the nested object in each copy
// // //   shallowCopyObject.address.city = 'San Francisco';
// // //   deepCopyObject.address.city = 'Los Angeles';
  
// // //   console.log(originalObject.address.city);      // Output: 'San Francisco' (modified by shallow copy)
// // //   console.log(shallowCopyObject.address.city);   // Output: 'San Francisco'
// // //   console.log(deepCopyObject.address.city);      // Output: 'Los Angeles'
  
// // //   console.log(originalObject.hobbies === shallowCopyObject.hobbies); // Output: true (shared reference)
// // //   console.log(originalObject.hobbies === deepCopyObject.hobbies);    // Output: false (independent copy)
  

// // //shallow copy example

// // // const user = {
// // //     name: 'Raj',
// // //     location: {
// // //       city: 'NY',
// // //       state: 'NY'
// // //     }
// // //   };
// // //    const copy = { ...user }; // structuredClone(user)
// // //   copy.location.city = 'Albany';
// // //   // console.log('original: ', user.location);// {}
// // //   // console.log('copy:', copy.location);

// // //   copy.name='Akash'
// // //   console.log('original: ', user);// {}
// // //   console.log('copy:', copy);


// // // var number = 10;
// // // var display = function () {
// // //   console.log(number);
// // //   var number = 20;
// // // };
// // // display();



// // //  const myArray = [1,3,2,4,5,6,7,8]

// // //  for (let index = 0; index < myArray.length; index++) {
// // //     //const element = myArray[index];
// // //     console.log(element)
    
// // //  }


 
// // // switch (key) {
// // //     case value:
        
// // //         break;

// // //     default:
// // //         break;
// // // }

// // // for (const key in object) {
// // //     if (Object.hasOwnProperty.call(object, key)) {
// // //         const element = object[key];
        
// // //     }
// // // }



// // // for (const iterator of object) {
    
// // // }


// // // const object = {
// // //     a:1,
// // //     b:2,
// // //     c:3,
// // //     d:4
// // // }

// // // for (const key in object) {
// // //    // if (Object.hasOwnProperty.call(object, key)) {
// // //        // const element = object[key];

// // //        console.log(object[key])
// // //      //  console.log(value)

        
// // //    // }
// // // }

// // // const arrr = ["ruby","python", "js", "html", "css","ts"]

// // // arrr.forEach( (item)=>{
// // // console.log(item)
// // // })

// // //  const array  = [
// // //     {
// // //         name:'ali',
// // //         mobile:123
// // //         name:'ali',
// // //         mobile:123
// // //         name:'ali',
// // //         mobile:123
// // //     }
// // //  ]


// // // let username: String='';

// // // const arr  = [2,3,2];
// // // total = arr.reduce((acc, item)=>{
// // //     console.log(acc)
// // //     return acc*item
// // // });
// // // console.log(total)
// // // console.log(arr);

// // //   class Car{

// // //     static getSpeed(speed){
// // //             this.speed = speed
// // //     }

// // //     static getAverage(){
// // //                 return this.speed/2;
// // //     }
// // //   }

// // //   const carObj = new Car()
// // //   console.log(carObj.getSpeed(10))



// // //   const obj = {
// // //                 username:'massu',
// // //                 mobile:9927,
// // //                 address : 'delhi',

// // //                 getAddress:()=>{

// // //                     return this.address;
// // //                 }
// // //   }

// // //   console.log(obj.getAddress());

// // //   console.log(this)


// // // this.data = 'hindi'

// // //   const  obj = {
// // //      inti : 'lll',
// // //    abc: ()=>{
// // //     var val = 'english'
// // //     //console.log(typeof this)
// // //         console.log(this)

// // //   }
// // // }

// // // var add = 'cewfe'

// // // function abc(){
// // //     //console.log(this)
// // //     var ab = 'tsst'
// // //      test = function(){
// // //        console.log(this.ab)
// // //      }
// // //      test();
// // // }
// // // abc();

  

// // // function User(name,mobile,address){
// // //             this.name = name;
// // //             this.mobile = mobile;
// // //             this.address = address;
// // //             this.getData = function testMe(){
// // //                 console.log('cdfc')
// // //             }
// // // }

// // // const userOne = new User('massu',9927,'delhi');

// // // console.log(userOne);

// // //  function createCar(make, model){

// // //       getCardetail = {make, model
// // //     }

          
// // //     return { drive(){
// // //                 console.log(getCardetail.make, )
// // //      }
// // //     }
// // //     // drive


// // //  }

// // //  const myCar =    createCar('toyota','corolla');

// // //  console.log(myCar.drive());


// // //    function outer(username){
    
// // //       // name = username??'massu';

// // //        function inner(){
// // //         console.log(username);
// // //        }
// // //        return inner

// // //    }
// // //    //outer = outer('masawwar');
// // //   // outer()
// // //   outerrrr = outer('masawwir')()


// // //   class User{

// // //      constructor(user, email, pass){
// // //          this.username  = user;
// // //         this.email = email;
// // //         this.pass  = pass;
// // //      }

// // //      static getUsername(){
// // //         console.log('ali');
// // //      }
// // //   }

// // //   class Teacher extends User{

// // //     constructor(username,email,pass){

// // //         //super(username)
// // //         // this.username = username
// // //         // this.email = email;
// // //         // this.pass  = pass;
        
// // //     }

// // //     getName(){
// // //         console.log(`${this.username}`);
// // //     }

// // //   }

// // //   const newUser = new Teacher('ali', 'emailis', '123');
// // //   newUser.getName()


// // // console.log(Object.getOwnPropertyNames("masawwar"));


// // // console.log(Object.create(null));

// // // const user = {
// // //               name:'masawwar',
// // //               mobile:9927808068,
// // //               address:'delhi'
// // //              }

// // // //    Object.defineProperties(user, name,address,{
// // // //                 writable:false,
// // // //                 enumerable:false
// // // //    });

// // // Object.defineProperties()


            
// // //    // console.log(user);
// // // for (let [key, value] of Object.entries(user)) {
// // //     //console.log(key,value)
// // //     console.log(value)

// // // }


// // //   class User{

// // //      constructor(email,pass){
// // //         this.email = email
// // //         this.pass = pass
// // //      }


// // //     get email(){
// // //         return this._email.toUpperCase(); // 
        
// // //      }

// // //      set email(value){
// // //         this._email = ''
// // //      }



// // //   }

// // //   const userOne = new User('msali@gmail', 123);
// // //   console.log(userOne.email)



// // //  function outer(){
// // //     const name='masawwar';

// // //     function displayName(){
// // //         console.log(`${name}`);
// // //     }

// // //    // return displayName;
// // //    displayName();
// // //  }

// // //  const outerFun = outer();

// // //  outerFun();


// // // const express = require('express');
// // // const app = express();



// // // app.get('/',(req,res)=>{
// // //     console.log(req)
// // //     res.send('app is running')

// // // })

// // // const app = require('http')

// // // const server =  app.createServer((req, res)=>{
// // //     res.writeHead(200,{
// // //                     'Content-Type':'text-plain'
// // //     })
// // // })






// // // const port = 3500;

// // // server.listen(port, ()=>{
// // //     console.log(`app running on ${port}`);
// // // })


// // //# create server using express

// // // const express  = require('express');
// // // const app      = express()
// // // const port     = 3090

// // // app.get('/', (req, res)=>{
// // //     res.send('Homepage is going on !!')
// // // })

// // // app.listen(port, ()=>{
// // //     console.log(`server is running on ${port}`)
// // // });

// // //# create a server using plain nodejs 

// // // const http = require('http');

// // // app = http.createServer((req, res)=>{
// // //         res.writeHead(200, {
// // //             'Content-Type':'Text-plain'
// // //         })

// // //         const { url } = req;

// // //         //res.end(url)
// // //        // console.log(url)
// // //        if (url === '/') {
// // //             res.end(`Home Page Working  `)
// // //        }

// // // })


// // // // app.get('/', (req, res)=>{
// // // //         res.send('it worked')
// // // // });

// // // const port = 9090
// // // app.listen(port, ()=>{
// // //     console.log(`app is running on ${port}`)
// // // });





// // // const express   = require('express');
// // // const app       = express();
// // // const mongoose  = require('mongoose')


// // // async function dbConnected(){
// // //     const db = await mongoose.connect('mongodb://localhost:27017/testproject', { useNewUrlParser: true }, (error, res)=>{
// // //                         if(error){
// // //                             console.log('error in mongodb connection')
// // //                         }
// // //                         console.log('mongo connect successfully')
// // // })

// // // }




// // // // const adminSchema = new mongoose.Schema({
// // // //     firstName: {
// // // //         type:String
// // // //     },
// // // //     lastName: {
// // // //         type:String
// // // //     },
// // // //     email: {
// // // //         type:String
// // // //     }
// // // //   });
  
// // // //   // Define a model associated with the "users" collection
// // // //   const Admin = mongoose.model('Admin', adminSchema);







// // // const adminSchema = mongoose.Schema({
// // //     name:{
// // //         type:String
// // //     },
// // //     email:{
// // //         type:String
// // //     },
// // //     mobile:{
// // //         type:Number
// // //     }
// // // },
// // //  {
// // //     timestamps:true
// // // })

// // // const Admin = mongoose.model('Admin', adminSchema)














// // //   async  function getData(){

// // //          try{
// // //             const conn = await dbConnected();
// // //             const adminData = await  Admin.find();
// // //             console.log(adminData)

// // //          }catch(error){
// // //             console.log(`${error}`)

// // //          }finally{
// // //             mongoose.disconnect()
// // //          }
           

            
// // //   }

// // //   getData();





// // // app.get('/', (req, res)=>{
// // //     res.send('comming data from db')
// // // })

// // // const port = 3400;
// // // app.listen(port, ()=>{
// // //     console.log(`server is running on ${port}`);
// // // })





// // // const arrData = [1,2,4,8,3,7,89]

// // // let max 
// // // let min

// // //  for (let index = 0; index < arrData.length; index++) {
// // //     const element = arrData[index];

// // //     if(index==0){
// // //         min = element
// // //         max =0 

// // //     }

// // //     if(element>max){
// // //         max = element
// // //     }
// // //     if(element<min){
// // //         min = element
// // //     }
    
// // //  }

// // //  console.table(['min=>'+min, 'max==>'+max])







// // // //

// // // function foo() {
// // //     let a = b = 0;
// // //     a++;

// // //     console.log('a===>', a);
// // //     console.log('xsadw', b)
// // //     //return a;
// // //     }
// // //     console.log(foo());


// // //     // console.log(typeof(a));
// // //     // console.log(typeof(b));
    
// // // [4:09 PM] Suman Guha

// // //  let object = {a: 1, b:2, c: 3 }

// // // for (const value in object) {
// // //     if (Object.hasOwnProperty.call(object, key)) {
// // //         const element = object[key];
// // //         console.log(element)
        
// // //     }

// // //     //console.log(object[key])
// // // }

// // // // for (let [key, value] in obj) {
// // // //    console.log(value)
// // // // }

// // // for (let [key, val] of Object.entries(obj)) {
// // //     console.log(val)
// // // }


// // //  const arr = [{name: 'a', age: 5},{name: 'b',age: 20},{name: 'c',age: 10}]

// // //   const result = arr.filter((iterate)=>{
// // //                             iterate.age>18
// // //                             //return iterate.name
// // //   });

// // //   console.log(result)

// // // const arr = [{name: 'b', age: 20}].filter(item => item.age > 18);
// // // const arr = [{ name: 'b', age: 20 }].filter(item => item.age > 18).map(item => item.name);

// // // const result = arr.filter((num)=> (num.age>5 || num.age>21) )
// // //                   .map((num)=> num.name)
// // // console.log(result)

// // // console.log(arr)



// // // let result = arr.filter((num)=>{
// // //                                num.age>18;
// // // })

// // // console.log(result)


// // // const express = require('express');
// // // app = express()


// // // app.get('/getData', (req, res)=>{
// // // })


// // // country state and population 
// // // india     delhi     1300
// // // india     up        1200



// // // india 2500


// // // const express = require('express');
// // // const app = express();

// // // var jwt = require('jsonwebtoken');




// // // function middlewareApply(req, res, next){
// // //         const token = req.headers.authorization

// // //         if(token!==3243242){
// // //            res.send('dde')
// // //         }
// // //         next();

// // //         // jwt.verify(token, 'superSecret', (err, result)=>{
// // //         //             if(err){
// // //         //                 res.send('occur error');
// // //         //             }
                    
// // //         //             next();
// // //         // })

// // //         // console.log(token);
// // //         // next();
// // // }

// // // app.use(middlewareApply);

// // // app.get('/getData', (req,res)=>{
// // //     console.log('xsxs');
// // //     // res.send('swx');
// // // })


// // // app.listen(3400, function(){
// // //     console.log(`server is running on 34oo`);
// // // })


// // // db.users.aggregation([

// // //         {
// // //             $lookup:{
// // //                 from:'adress',
// // //                 localField:'',
// // //                 foreignField:'',
// // //                 as:'useraddressData'
                
// // //             }
// // //         }

// // // ])




// // // db.user.aggregation([
// // //         {
// // //             $group:{
// // //                 _id: "$countryName",
// // //                 totalQuantity: { $sum: "$populations"}
// // //             }
// // //         }
// // // ])


// // // db.user.aggregation([
// // //     {
// // //         $group:{
// // //             _id:"$countryName",
// // //             total:{ $sum: "$populations"}
// // //         }
// // //     }
// // // ])





// // //#CALLBACK 
// // // function add(a,b){
// // //             return (a+b);
// // // }
// // // function minus(a,b){
// // //     return a-b;
// // // }
// // // function calculate(a,b, callback){
// // //             return callback(a,b);
// // // }
// // // console.log(calculate(9,4, minus));



// // //# PROMISE

// // // function fetchData(){
// // //   return new Promise((resolve, reject)=>{

// // //         const error = true;

// // //         if(error){
// // //             reject('occuring an error')
// // //         }
// // //         const data = {
// // //                         name:'masawwar',
// // //                         mobile:9927808068,
// // //                         email:'msali069@gmail.com'
// // //                      }
// // //         resolve(data)
// // //   })
// // // }


// // // fetchData().then((value)=>{
// // //             console.log(value)
// // // }).catch((error)=>{
// // //     console.log(`${error}`)
// // // }).finally(()=>{
// // //     console.log('finally called')
// // // })


// // // async function getData(){
// // //             try{
// // //                 const userData = await fetchData();
// // //                 console.log(userData)
// // //             }catch(err){
// // //                 console.log(`error in promise`)
// // //             }finally{
// // //                 console.log(`closed the connected database`)
// // //             }
// // // }
// // // getData();


// // //#CLOSURE

// //  function outer(){
// //     const name = 'masawwar';

// //     function inner(){
// //         console.log(`My name is ${name}`)
// //     }
// //     return inner;

// //  }


// // function outer(){
// //     const name = 'masawwar';

// //     return inner = ()=>{
// //         console.log(`You are ${name}`)
// //     }
// //  }

// //  const outerCall =  outer();
// // console.log(outerCall())
// ///////////OR/////////////
// // const outerCall =  outer()();
// // console.log(outerCall)



// // //#CONSTRUCTOR

// // function Person(name,email){
// //             this.name=name??'massu';
// //             this.email=email??'msali069@gmail.com';
// // }

// // Person.prototype.callMe  = function(){
// //     console.log(`Your name is ${this.name}`);
// // }

// //  const personOne = new Person('massu');

// //  personOne.callMe()

// // #ANONYMOUS FUNCTION
// // const functionAdd = function(){
// // console.log('hi its working')
// // }


// // // # FIRST CLASS FUNCTION

// //   function sayHello(){
// //               return `hello`
// //   }

// //   function greeting(msg, name){
// //          console.log(`${msg} ${name}`)   
// //   }
// //   greeting(sayHello(), 'Mr Masawwar')

// // setTimeout(()=>{
// //     console.log('hiii')
// // },2000)

// // const arr = setInterval(() => {
// //     console.log('ee')
// // }, 3000);

// //clearInterval(arr)

// //  const arr = [{name: 'a', age: 5},{name: 'b',age: 20},{name: 'c',age: 10}]


// //  const res = arr.filter( (num)=>{
// //         return num.age>5
// // })

// // const res = arr.map( (num)=>{
// //     return num.age
// // })
// //console.log(res)

// // const result = arr.filter((iterate)=> iterate.age>5).map((iterate)=>iterate.age);
// // console.log(result);

// //# EVENY EMITTER
// // const event = require('events');
// // const eventEmitter = new event();

// // function callback(){
// //     console.log(`clicked function`)
// // }
// //register an event
// // eventEmitter.on('click', callback);
// //execute a event
// // eventEmitter.emit('click');

// //# OBJECT DESTRUCTURING

// // const obj = {
// //     name:'massu',
// //     email:'msali069@gmail.com',
// //     mobile:9927808068
// // }

// // const {name:nam} = obj
// // console.log(nam)


// // const arr = [2,6,4,2]

// // const result = arr.reduce((accumulator,curerent)=>{ 
// //     return accumulator*curerent;
// // } ,0)

// // console.log(result)


// // //# FETCH EXAMPLE

// // const apiUrl = 'https://weatherapi-com.p.rapidapi.com/ip.json';
// // const headers = {
// //   'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
// //   'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY_HERE'  // Replace with your RapidAPI Key
// // };
// // fetch(apiUrl, {
// //   method: 'GET',
// //   headers: headers
// // })
// //   .then(response => {
// //     if (!response.ok) {
// //       throw new Error('Network response was not ok');
// //     }
// //     return response.json();
// //   })
// //   .then(data => {
// //     console.log('API Response:', data);
// //   })
// //   .catch(error => {
// //     console.error('Error:', error);
// //   });

// //# SYMBOL EXAMPLE
// // const newVar = Symbol('123')
// // object = {
// //     name:'masawwar',
// //     [nm] : newVar
// // }
// // console.log(object)

// // //# function overloading

// //  class Car{

// //    calculateSum(...param){
// //    // console.log(param)
// //    return  param.reduce( (accumulator, initialVal)=> accumulator+initialVal, 1);
// //    }
// //  }

// // const car = new Car();

// // console.log(car.calculateSum(1,2,3))


// // //# inheritance without oops



// // const Animal = {
// //     address:'hahahaha',

// // }

// // const dog = {
// //     name:'Doggy'
// // }

// // const cat = {
// //     name:'meow',
// //     __proto__:Animal
// // }

// // console.log(cat.address)


// //   function SetUsernameuser(username){
// //            this.user = 'ma'+username;        
// //   }

// //   function GetUserInfo(username, email, address){
// //                // this.user;

// //                SetUsernameuser.call(this, username)
// //                 this.email = email
// //                 this.address = address

// //                 //console.log(this.user);
// //   }

// //   const getuserData = new GetUserInfo('sofi','sofi@gmail','gopali');
// //   console.log(getuserData)



// // const express = require("express");
// // const app     = express();


// // function middlewareinjected(req, res, next){
// //    logData={
// //     apiUrl: req.originalUrl,
// //     method: req.method,
// //     timeStamp: req.timeStamp,
// //     all: req.all
// //    }
// //    console.log(logData)
// //    next();

// // }

// // app.use(middlewareinjected)


// // const jsonData = {
// //     "name":"masawwar"
// // }

// // app.get('/getData', (req, res)=>{
// //             res.json(jsonData)
// // })

// // const port = process.env.PORT||3200
// // app.listen(process.env.PORT, ()=>{
// //     console.log(`app is running on ${port}`)
// // })



// // // console.log(a);
// // // let a = 20


// //  const obj = {
// //                 "name":"masawwar",
// //                 "mobile":9912
// //               }

// //         const {name} = obj

// //         console.log(name)


// // var myObject = {
// //     foo: "bar",
// //     func: function() {
// //         var self = this;
// //         console.log("outer func:  this.foo = " + this.foo); // undefined
// //         console.log("outer func:  self.foo = " + self.foo); // undefined
// //         (function() {
// //             console.log("inner func:  this.foo = " + this.foo); 
// //             console.log("inner func:  self.foo = " + self.foo); 
// //         }());
// //     }
// // };
// // myObject.func();



// //   function outer(){

// //      var username = 'ali'
 
// //       function inner(){
// //          console.log(`hiiii i am ${ali}`)
// //       }
// //       return inner
// //   }

// //  outer();


// // const urls = [
// //   "https://jsonplaceholder.typicode.com/posts",
// //   "https://jsonplaceholder.typicode.com/posts/59",
// //   "https://jsonplaceholder.typicode.com/users",
// //   "https://jsonplaceholder.typicode.com/posts/178",
// //   "https://jsonplaceholder.typicode.com/comments",
// //   "https://jsonplaceholder.typicode.com/users/987",
// //   "https://jsonplaceholder.typicode.com/albums",
// //   "https://jsonplaceholder.typicode.com/todos/967",
// //   "https://jsonplaceholder.typicode.com/comments/732",
// //   "https://jsonplaceholder.typicode.com/photos",
// //   "https://jsonplaceholder.typicode.com/todos",
// //   "https://jsonplaceholder.typicode.com/photos/800"
// // ];

// // const fetch = require('node-fetch')

// // let activeUrls;
// // let inactiveUrls;
    
// //  function fetchData(url) {
// //      const response =  fetch(url);
// //      return response;
// //   }

// // async function getData(){
// //     const promises     =  urls.map(url => fetchData(url));
// //     const responseAll  =  await  Promise.all(promises)
// //     const activeUrls   = responseAll.filter((res)=> res.status==200).map((res)=>res.url)
// //     const inactiveUrls = responseAll.filter((res)=> res.status==404).map((res)=>res.url)

// //  console.log('active urls', activeUrls)
// //  console.log('inactive urls',inactiveUrls)
// // }
// // getData();


// // async function reactMe(){
// //     console.log('under process please wait ....')

// //     for (let index = 0; index < urls.length; index++) {
// //         const url = urls[index];


// //       await   fetch(url)
// //         .then((response)=>{
// //                 if(response.status==404){
// //                     inactiveUrls.push(url)
// //                 }
// //                 if(response.status==200){
// //                      activeUrls.push(url)
// //                 }
// //         }).catch((err)=>{
// //             console.log(err)
// //         })
// //     }


// // console.log('active ==>',activeUrls)
// // console.log('inactive==>',inactiveUrls)

// // }
// // reactMe();

// // hitt='oooo'

// // var myObject = {
// //     foo: "bar",
// //     func: function() {
// //         var self = this;
// //         var hitt='jiji'
// //         console.log("outer func:  this.foo = " + this.foo); // ==> bar
// //         console.log("outer func:  self.foo = " + self.foo); // ==> bar
// //         function abc() {
// //             console.log("inner func:  this.foo = " + this.foo);  // 
// //             console.log("inner func:  self.foo = " + self.foo); 
// //             console.log("inner func:  hitt.hitt = " + this.hitt); 
// //         };
// //         abc();
// //     }
// // };
// // myObject.func();



// // const user = {
// //     username: "hitesh",
// //     loginCount: 8,
// //     signedIn: true,

// //     getUserDetails: function(){
// //         //console.log("Got user details from database");
// //         console.log(`Username: ${this.username}`);
// //         console.log(this);
// //     }

// // }



// //console.log(user.username)
// //console.log(user.getUserDetails());
// // console.log(this);


// // function User(username, loginCount, isLoggedIn){
// //     this.username = username;
// //     this.loginCount = loginCount;
// //     this.isLoggedIn = isLoggedIn

// //     this.greeting = function(){
// //         console.log(`Welcome ${this.username}`);

// //     }

// //     return this
// // }

// // const userOne = new User("hitesh", 12, true)
// // const userTwo = new User("ChaiAurCode", 11, false)
// // console.log(userOne.constructor);
// //console.log(userTwo);



// // slice and splice
// // debouncing 
// // main four module of nodejs
// // four main concept of nodejs


// //let myarray = [1,4,7,9,2];
// // output=[1,4,7,9,2,2,9,7,4,1]
  
// //  for (let index = myarray.length-1; index >= 0; index--) {
// //      myarray.push(myarray[index]);
// //      //myarray['index'] = myarray[index]
// //  }
// //    console.log(myarray)


// // const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

// // // cities.slice();

// // const newCityArr = cities.slice(-4);

// // console.log(newCityArr)


// // const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

// // const newCityArr = cities.slice(2,4);
// // console.log(newCityArr)
// // console.log(cities)

// //'use strict';
// // var name = 90;
 
// // function getName(){
// //     //console.log(name)
// //     var a=b=10;
// // }
// // getName();

// // console.log('a', typeof a ==='undefined'); 
// // console.log('b', typeof b ==='undefined');


// // var myObject = {
// //     foo: "bar",
// //     func: function() {
// //         var self = this;
// //         var hitt='jiji'
// //         console.log("outer func:  this.foo = " + this.foo); // ==>  //bar
// //         console.log("outer func:  self.foo = " + self.foo); // ==>  //bar
// //         function abc() {
// //             console.log("inner func:  this.foo = " + this.foo);  // undefined
// //             console.log("inner func:  self.foo = " + self.foo);  // bar
// //             console.log("inner func:  hitt.hitt = " + this.foo); 
// //         };
// //         abc();

// //     }
// // };
// // //myObject.func();

// // var name='masa'
// // function xyz(){
// //     var address='noida'
// //     console.log('xyz output==>',this.address)
// // }
// // xyz();

// //  var obj = {
// //     name:'massu',
// //     abc:  function abc (){
// //         console.log(this.name)
// //         test = ()=>{
// //             console.log('comming',this.name)
// //         }
// //         test();
// //     }
// //  }
// //  obj.abc();



// //'use strict';

// // function display() {

// //   var a = b = 10;

// // }

// // display();

// // console.log('b', typeof b === 'undefined'); // false
// // console.log('a', typeof a === 'undefined'); // true












// //   const promis = new Promise((resolve, reject)=>{

// //                 let error = true;
// //                 if(error){
// //                     reject(error)
// //                 }else{
// //                     const data={
// //                         name:'ali',
// //                         email:'msali@gmail.com'
// //                     }
// //                     resolve(data);
// //                 }

// //   })

// // //   var name: String


// //  const express  = require('express')
// //  const fs       = require('fs')
// //  const app      = express();

// //  var fileData =   fs.readFileSync('test.txt', 'utf8')

// //  var arr = fileData
// //                         .toLowerCase()
// //                         .match(/b/g)
  
// //                         const count = {};
                        
// //                         for (let ele of arr) {
// //                             if (count[ele]) {
// //                                 count[ele] += 1;
// //                             } else {
// //                                 count[ele] = 1;
// //                             }

// //                             console.log(count);
// //                             return 
// //                         }
                        
// //                         console.log(count);
                        

// // const port =  3120
// //  app.listen(port,()=>{
// //     console.log(`server is running on ${port}`);
// //  })



// // arr = arr.filter((value, index, self) => self.indexOf(value) !== index);
// // arr = arr.map((value, index, self) => self.indexOf(value) === index);
// // arr = arr.reduce((value, index, self) => self.indexOf(value) === index);




// //   new Promise()

// // function fetchData(){
// //         return new Promise((resolve, reject)=>{

// //             const error = false;
// //             if(error){
// //                 reject({error:'error occuring true'})
// //             }
// //             const data = {
// //                 name:'masawwar',
// //                 email:'msali'
// //             }
// //             resolve(data)
// //         })
// //  }


// //  fetchData().then((data)=>{
// // console.log(data)
// //  })
// // //  .catch((error)=>{
// // //     console.log(error)
// // //  })


// // //   async function getData(){
      
// // //        try{
// // //         const result = await fetchData();
// // //         console.log(result)
        
// // //        }catch(error){
// // //         console.log(error)
// // //        }
// // //   }

// // //   getData();



// // // function  add(a,b){
// // //             return parseInt(a+b)
// // // }

// // // function substract(a,b){
// // //     return a-b;
// // // }

// // // function calculate(a,b, callback){
// // //                 return callback(a,b);
// // // }

// // // console.log(calculate(4, 5, add))
// // // console.log(calculate(6, 5, substract))


  

// // //   function msg(){
// // //     return 'hello'
// // //   }

// // //   function greet(msg, name){
// // //            console.log(msg+' '+name)
// // //   }

// // //  greet(msg(), 'masawwar')



// // const http = require('http');

// // const port = 5490

// // const server = http.createServer(function(req,res){
// // res.write(`its cool running on port ${port}`);
// // res.end();
// // })
// // server.listen(port)





// let arr = [ 7, -4, 6, 3, 2, -1, 0 , 9 ]

// //let output = [ 7, 6, 3, 2, 0, 9, -4, -1]


// const NSort =  (arr) => {

//       for (let index = 0; index < array.length; index++) {
//         const element = array[index];


        
        
//       }

// //   console.log("-- input ", arr)
// //   return arr
// }

// NSort(arr);



// const fs         = require('fs')
// const {Transform} = require('stream')
// const  readData  = fs.createReadStream('readFile.txt')
// const  writeData = fs.createWriteStream('writeFile.txt')

// const TransformData = new Transform({

//     transform(chunk, encoding, callback){
//         this.push(chunk.toString().toUpperCase())
//         callback();
//     }
// })

// // console.log(readData)
// // 
//  readData.pipe(TransformData).pipe(writeData)

// readData.on('end', ()=>{
//     console.log("data writing successsfully")
// })

// const arr = [5, 2, 6, 2, 1, 7];
// arr.sort((a,b)=> a-b); // Sorting in descending order
// console.log(arr)



// function User(name, mobile){
//     this.name = name;
//     this.mobile = mobile
// }

// User.prototype.trim = function(name){
//     return this.toLowerCase();
// }


// const userOne = new User('masawwar', 9927808068);
// console.log(userOne.trim())

// function test(){
//      this.address ='massu'
// // }
// let obj = {
//     name:'swd'
// }
//  function setusername(){
//             this.text = 'anna'
//  }

//  setusername.call(obj)

//  console.log(obj);


//  function user(name){
//     this.username = name
//  }

//   function GetUserdata(name, email, passsword){
//          //user.call(this, name)
//          //super(name)
//         //  user.call(this, 'masawwar');
//         //  user.apply(this,  ['masawwar', 'ali']);
//          user.bind(name);
//          this.email     = email
//          this.password  = passsword
//   }


// let  userObj = new GetUserdata('mass', 'msali@gmail', '12345');

// console.log(userObj)



// Array.prototype.myname = 'massu';

// myArray = [1,2,3,4,5,6]

// for(let v in myArray){
//  // console.log(v);
//  if(myArray.hasOwnProperty(v)){
//     console.log(v)
//  }
// }


// const mongoose = require("mongoose");
//  const connectDb = mongoose.connect("mongodb://localhost:27017/testproject", (err, result)=>{
//    if(err){
//     throw err
//    }
//    console.log('mongo connected successfully');
// })

// const admin = require('./models/adminModel')

// const resultData = admin.findById({_id:'63beb1c88ebd9855f5ffcb9d'}).toArray((err, result)=>{
//     console.log('data fetched',result)
// })

// dbo.collection("admins").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });

// (function(a){
//     return (function(){
//       console.log(a);
//       var a = 23;
//     })()
//   })(45);




// The following code outputs 2 and 2 after waiting for one second
// Modify the code to output 0 and 1 after one second.

// let array =  [2,3,4,5,7];
//  function rotateRight(arr, rotation){
//       if(rotation==0) return arr
//        for (let index = 0; index <= rotation; index++) {
//          let element = arr.shift();
//          arr.push(element)
//          console.log(arr)
//        }
    
//  }

//  console.log(rotateRight(array, 4))



// function main(){
//     console.log('A');
//     setTimeout(
//         function print(){ console.log('B'); }
//         ,0);
//     console.log('C');
// }
// main(); // A,C and B


// function foo() {
//     let x = y = 0;
//     x++;
//     y++;
//     return x;
// }

// console.log(foo(), typeof x, typeof y);


// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2);

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.getProfile = function() {
//         // Outer function context
//         console.log(this.constructor.name); // User
//         return () => {
//             // Inner function context
//             console.log(this.constructor.name); // User(Get it from the outer context)
//             console.log("I'm " + this.name + ", " + this.age + " yrs old");
//         };
//     }
// }

// let user = new User('John', 25);
// let profile = user.getProfile();
// profile(); //I'm John, 25 yrs ol



// var usernamename = 'dedewd'; // Define usernamename in the global scope

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     var self = this; // Store reference to 'this'

//     this.getProfile = function() {
//         // Outer function context
//         console.log(this.constructor.name); // User
//         return ()=> {
//             // Inner function context
//             console.log(usernamename); // Access global variable
//             console.log("I'm " + this.name + ", " + this.age + " yrs old");
//         };
//     }
// }

// var user = new User('John', 25);
// var profile = user.getProfile();
// profile(); // I'm John, 25 yrs old

// let num = [1,2,2,3] //=> Ans: [1,2,3] 

// console.log([...new Set(num)])
// console.log(new Set(num))


// let a1 = function(){ 
//     return arguments
// } 
// console.log(a1('Hello'))

// Q.6: How can get Object from array by value match



// var arr = [2,4,3,5,6,8]

// let temparr = arr.slice();
// console.log(temparr);


// var address = "masawwar Ali";

// console.log(address.match(/\d+/g))

// console.log(address.match(/ali+/gi))

// let string = 'saif ali gour';

// let word = ''
// let reversedWords=''

//   function reverseStr(str){

//            for (let i = 0; i < str.length ; i++) {
//             if(str[i]==' '){
//                 reversedWords = word+' '+reversedWords
//                 word=''
//             }else{
//                word += str[i];
//             }
//            }
//            reversedWords = word+' '+reversedWords

//            return reversedWords;
//   }
//   console.log(reverseStr(string))

// var name='sss'
// function valueOffthis(params) {
//     //console.log('valueOffthis',this);
//     var nnn='dd'

//    setTimeout(function () {
//        console.log('setTimeout',this);// if this keyword is is inside the nested regular function then this keyword will be refred prent function output : global

//    }, 1000);

//    setTimeout(() => {
//       // console.log(this);// if this is in arrow function and and arrow in either regular function or arrow  function then the this will be referd to the prent this keyword.  putput : global

//    }, 500);

// }
//  valueOffthis()


// function isPowerOf3(squre, value) {
//     let isPerfectSqure = squre
//         ;
//     let flag = 0;
//     /*check power of any no*/
//     while (isPerfectSqure != 1) {
//         if (isPerfectSqure % value != 0) {
//             flag = 1;
//             break;
//         }
//         isPerfectSqure = isPerfectSqure / value;
//     }

//     if (flag == 0)
//         console.log("%d is a number that is the power of 3.",isPerfectSqure, squre);
//     else
//         console.log("%d is not the power of is",PerfectSqure, squre);
// }
// isPowerOf3(16, /** is perfect squre of*/ 4);


//console.log(++[+[]]);
//console.log(+[+[2]]);
//  console.log(+[4]);
// console.log(+null);

// var assert = require('assert');

// function add(a, b) {
//     return a + b;
// }
// var expected = add(1, 2);
// assert(expected === 3, 'one plus two is three');


// querystring = require('querystring');
// const obj1 = querystring.parse('name=sonoo&company=javatpoint$&');
// console.log(obj1);
// const qs1 = querystring.stringify({ name: 'sonoo', company: 'javatpoint&name=saif' });
// console.log(qs1);


//  for (var index = 0; index < 5; index++) {
//     // setTimeout(()=>{
//     //     console.log(index)
//     // }, 1000)
//     console.log(index)
    
//  }   


// const obj = {
//     name:'masawwar',

//     add: function(){
//         const email='antal';
//         const address = 'india';
//         console.log(this);

//         (()=>{
//             console.log(this)  // it refer to the parent context
//         })()
//     }
// }

// obj.add();  // { name: 'masawwar', add: [Function: add] }



// const arr = ['hello', 'masawwar', 'ali']


// for (let index = 0; index < arr.length; index++) {
//     let element = arr[index];

//     console.log(element)

//     var  asciiVal = element.charCodeAt(0)
//         if(asciiVal >=97 && asciiVal<=122){
//        asciiVal = String.fromCharCode(asciiVal - 32); // Convert to uppercase ASCII
//        let newStr = element.substring(1)
//        arr[index] = asciiVal+newStr
//     }else{
//         arr[index] = element;
//     }

//    // console.log(index)

    
// }

// console.log(arr)


// const eventEmitter = require("events");
// const emitter      = new eventEmitter();

// emitter.on("myEvent", (name)=>{
//      console.log('Hey welcome', name)
// })
// emitter.emit("myEvent", ['masawwar', 'delhi india']);


//   arr =[1,2,3,4,5]
//   combined = [...arr,9,8]
//   console.log(combined)

// 


// // Example: stdout()
// process.stdout.write('Hello World\n');


// // Example: 02
// let answers = [];
// let questions = [
//   'What is your name?',
//   'What is your fav hobby?',
//   'What is your preferred programming language?'
// ];

// function ask(i) {
//   process.stdout.write(`\n ${questions[i]}`);
//   process.stdout.write(' > ');
// }

// process.stdin.on('data', function(data) {
//   answers.push(data.toString().trim());

//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// });

// ask(0); //function call
// process.on('exit', function() {
//   process.stdout.write('\n\n');
//   process.stdout.write(
//     `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
//   );
//   process.stdout.write('\n\n');
// });

// process.stdout.write("please write anything i will write back to you as it is MAGIC >");
// process.stdin.on("data", (getData)=>{
//     process.stdout.write(getData.toString()+' >');
// });



// var recursive = function () {  
//     console.log("Hey! 1000 millisecond completed!..");   
//     setTimeout(recursive, 1000);  
// }  
// recursive();


// function welcome () {  
//     console.log("Welcome to JavaTpoint!");  
// }  
// // var id1 = setTimeout(welcome, 1010); 

// var id2 = setInterval(welcome, 1000);  
// clearInterval(id2);  



// const aob = 
// [
//     { framework: 'React.JS', website: 'Paypal' },
//     { framework: 'React.JS', website: 'Tesla' },
//     { framework: 'Angular', website: 'Google' },
//     { framework: 'Vue.JS', website: 'Vue' },
//     { framework: 'JavaScript', website: 'inblack67' },
// ]


// output:-
// [
//     { victim: 'React.JS', count: 2 },
//     { victim: 'Angular', count: 1 },
//     { victim: 'Vue.JS', count: 1 },
//     { victim: 'JavaScript', count: 1 }
// ]



const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

 //user.welcomeMessage()
 //user.username = "sam"
 //user.welcomeMessage()

 //console.log(this);

  //#output undefined


// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()  //#output global object


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() // #output undefined


// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }
// chai() // #output global context of nodejs context

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai() // #output { }


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
//  chai() // #output undefined



// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//explicit method need return keyword

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

////const addTwo = (num1, num2) => ({username: "hitesh"})

//implicit method no need return keyword

//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()



//   const mongoose = require("mongoose");

//   const userSchema = new mongoose.Schema({

//     id:{
//         type:String,
//         required:true
//     }

//   })

// export const   User  =  mongoose.model('User', userSchema)

let a =()=> arguments;
   console.log(a('Hello'));
   hello