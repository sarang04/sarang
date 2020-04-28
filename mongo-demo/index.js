const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/play')
.then(()=>console.log('connected'))
.catch(err=>console.error('could not..',err));

const courseSchema=new mongoose.Schema({
 name:String,
 author:String,
 tags:[ String ],
 date:{ type: Date, default: Date.now},
   isPublished: Boolean
});

const Course = mongoose.model('Course,', courseSchema);

async function createCourse(){

    const course=new Course({
        name: 'Angular Course',
        author:'Mosh',
        tags: ['node','Frontend']
        });
        
        const result = await course.save();
        console.log(result);

}

async function getCourses(){
    //comparison query operator
    //eq(equal), ne(not eq), gt(greater than), gte,lt(less than),
    //lte,in,nin(not in)

    //logical operator (or,and), .or([{author:'Mosh},{}])
    const courses = await Course
    .find({ author:'Mosh', })
    .limit(10)
    .sort({ name: 1 })
    // .select({ name: 1,tags: 1 });
    .count();   //counts the courses
    console.log(courses);
}
getCourses();
