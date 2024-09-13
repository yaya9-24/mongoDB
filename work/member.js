db.getCollection("member").find({}).sort({num:-1})

//번호,아이디,비번,이름,폰번 5명의 회원정보를 임의로 입력하세요.
db.member.insertMany([
{num:1,id:"admin1",pw:"hi1111",name:"kim1",tel:"011"},
{num:2,id:"admin2",pw:"hi2222",name:"kim2",tel:"022"},
{num:3,id:"admin3",pw:"hi3333",name:"kim3",tel:"033"},
{num:4,id:"admin4",pw:"hi4444",name:"kim4",tel:"044"},
{num:5,id:"admin5",pw:"hi5555",name:"kim5",tel:"055"}
])

// update 수정
db.member.update({num:5},{$set:{id:"kimchi",pw:"qwer",name:"yang",tel:"02"}})

//delete 삭제
db.member.deleteOne({num:5})