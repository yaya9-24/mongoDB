//주석
//한 행만 실행(F6,오른쪽 녹색화살표버튼)
//모든라인 실행(F5)
db.getCollection("testcollection").find({})
db.testcollection.find()
db.testcollection.find({}, { name: 1 })
db.testcollection.find({}, { name: 1, _id: 0 })
db.testcollection.find({}).count() //행 카운트


//정렬 1:asc, -1:desc
db.testcollection.find().sort({ name: 1 })
db.testcollection.find().sort({ name: -1 })
db.testcollection.find().sort({ age: -1 })
db.testcollection.find().sort({ office: -1 })
db.testcollection.find().sort({ office: -1, name: 1 }) //중첩가능

db.testcollection.find().skip(5) //5개 행은 스킵하고 출력
db.testcollection.find().sort({ age: -1 }).skip(5) //정렬 후 스킵하고 출력

//지정한 개수만 출력 : limit
db.testcollection.find().sort({ age: 1 }).limit(5)

//조건검색 where name='Garry'
db.testcollection.find({ name: "Garry" })

//where age 
db.testcollection.find({ age: 1 })

//조건검색 where name like 'Ga%', '%nn%', '%ny'
db.testcollection.find({name:/^Ga/})
db.testcollection.find({name:/nn/})
db.testcollection.find({name:/ny$/})

//비교조건
db.testcollection.find({age:5}) //age=5
db.testcollection.find({age:{$eq:5}}) //age=5
db.testcollection.find({age:{$ne:5}}) //age!=5

db.testcollection.find({age:{$lt:5}}) //age <5
db.testcollection.find({age:{$gt:5}}) //age >5
db.testcollection.find({age:{$lte:5}}) //age <=5
db.testcollection.find({age:{$gte:5}}) //age >=5

db.testcollection.find({age:{$not:{$gt:5}}}) //not(age>5) >>> age <=5_


db.testcollection.find({age:{$gt:5,$lt:8}}) //age > 5 and age < 8
db.testcollection.find({age:{$gte:5,$lte:8}}) //age >= 5 and age < 8

//동시만족 and (예: 로그인처리시)
db.testcollection.find({age:5,name:"Emmey"}) //age = 5 and name='Emmey'
db.testcollection.find({$and:[{age:5},{name:"Emmey"}]}) //age = 5 and name='Emmey'

//만족하는 것이 있으면 OK
db.testcollection.find({$or:[{age:8},{age:5}]}) //age = 5 or age = 8
db.testcollection.find({$or:[{age:8},{age:5},{age:10}]}) //age = 5 or age = 8 or age=10

//or가 여러 개 있을 때
db.testcollection.find({age:{$in:[5,8,10]}}) //age in(5,8,10)

//not or가 여러 개 있을 때 not in >> nin
db.testcollection.find({age:{$nin:[5,8,10]}}) //age in(5,8,10)

//중복제거
db.testcollection.distinct("office") //중복배제해서 89개
db.testcollection.distinct("age") //중복이 없어서 100개

//입력하기 전에 전체 검색
db.testcollection.find().sort({age:-1})

db.testcollection.insert({age:101,name:"kim1",office:"multi",phone:"02-6000"})
db.testcollection.insertOne({age:105,name:"kim5",office:"multi5",phone:"02-6000-5"})

//여러개 입력
db.testcollection.insert([
{age:102,name:"kim2",office:"multi2",phone:"02-6000-2"},
{age:103,name:"kim3",office:"multi3",phone:"02-6000-3"},
{age:104,name:"kim4",office:"multi4",phone:"02-6000-4"}
])
db.testcollection.insertMany([
{age:106,name:"lee1",office:"edu01",phone:"0511"},
{age:107,name:"lee2",office:"edu02",phone:"0512"},
{age:108,name:"lee3",office:"edu03",phone:"0513"}
])

//mission
//db: multi
//collection : member
////번호,아이디,비번,이름,폰번 5명의 회원정보를 임의로 입력하세요.

//update 수정
db.testcollection.find().sort({age:-1})

db.testcollection.update({age:101},
{$set:{name:"yang1",office:"multi2",phone:"0311"}})

db.testcollection.update({name:/^le/},
{$set:{name:"yang99",office:"multi99",phone:"0399"}},{multi:true})

db.testcollection.updateOne({age:108},
{$set:{name:"lee8",office:"multi8",phone:"0388"}})

db.testcollection.updateMany({name:/99/},
{$set:{name:"lee7",office:"multi7",phone:"037"}})

//delete 삭제
db.testcollection.find().sort({age:-1})

db.testcollection.remove({_id:ObjectId("66e3967caabf6c08ff072f91")})

db.testcollection.remove({age:107})

db.testcollection.deleteOne({age:106})

db.testcollection.deleteMany({age:{$gt:100}})


//member 컬렉션의 내용도 수정, 삭제 해보세요

//employees컬렉션 내용들도 입력,수정,삭제,검색 해보세요







