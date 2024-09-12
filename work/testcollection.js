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

