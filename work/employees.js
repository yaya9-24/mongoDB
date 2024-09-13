db.getCollection("employees").find({})

//employee_id 를 기준으로 역정렬 검색
db.employees.find().sort({employee_id:-1})

db.employees.find({first_name:/^Ki/})
db.employees.find({first_name:/nn/})
db.employees.find({first_name:/ny$/})

//insert 입력
db.employees.insert(
{employee_id:207,first_name:"Yang",last_name:"Jun",email:"NAVER",
 phone_number:"010",hire_date:"2024-09-13"})
 
//update 수정
db.employees.update({employee_id:207},{$set:{job_id:"IT_PROG",salary:9000}})
//delete 삭제
db.employees.deleteOne({employee_id:207})