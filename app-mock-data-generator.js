const CollegeService = require('./src/services/college/college.service');
const collegeService = new CollegeService();

const StudentService = require('./src/services/student/student.service');
const studentService = new StudentService();

const listOfColleges = ["IIT, Delhi (Delhi)", "IIT, Bombay (Mumbai)", "IIT, Kharagpur (Kharagpur)", "IIT, Kanpur (Kanpur)", "Birla Institute Of Technology & Science (Pilani)", "NIT, Karnataka (Mangalore)", "College Of Engineering, Guindy (Chennai)", "Netaji Subhas Institute Of Technology* (New Delhi)", "VIT University (Vellore)", "College Of Engineering, Pune (Pune)", "IIIT, Hyderabad (Hyderabad)", "IIIT, Allahabad (Allahabad)", "Indian Institute Of Technology (Indian School Of Mines), Dhanbad (Dhanbad)", "Delhi Technological University (New-Delhi)", "Manipal Institue Of Technology (Manipal)", "University Institute Of Engineering, Chandigarh University (Chandigarh)", "PSG College of Technology (Coimbatore)", "Visvesvaraya National Institute Of Technology (Nagpur)", "Thapar University (Patiala)", "M.S. Ramaiah Institute Of Technology (Bangalore)", "Birla Institute Of Technology (Ranchi)", "The National Institute Of Engineering (Mysore)", "University College Of Engineering (Hyderabad)", "Sri Sivasubramaniya Nadar College of Engineering (Kalavakkam)", "B.I.T. Sindri (Dhanbad)", "Institute Of Technology (Ahmedabad)", "SRM Engineering College (Chennai)", "Government College Of Engineering (Amravati)", "SVKM's NMIMS-Mukesh Patel School Of Technology Management & Engineering (Mumbai)", "Mepco Schlenk Engineering College (Sivakasi)", "Thiagarajar College Of Engineering (Madurai)", "Chaitanya Bharathi Institute Of Technology (Hyderabad)", "Dwarkadas J. Sanghvi College Of Engineering (Mumbai)", "Rungta College Of Engineering And Technology (Bhilai)", "Guru Nanak Dev Engineering College (Ludhiana)", "Zakir Husain College Of Engineering & Technology, Aligarh (Aligarh)", "Govt. Model Engineering College (Cochin)", "MIT College Of Engineering (Pune)", "PES University (Bangalore)", "KLE Dr M.S Sheshgiri College Of Engineering And Technology (Belgaum)", "Bannari Amman Institute Of Technology (Erode)", "Symbiosis Institute Of Technology (Pune)", "BMS Institute Of Technology & Management (Bangalore)", "BMS College Of Engineering (Bangalore)", "Bharati Vidyapeeth University College Of Engineering (Pune)", "Jawaharlal Nehru National College Of Engineering (Shimoga)", "K L University (Guntur)", "Galgotias College Of Engineering And Technology (Noida)", "Shri Ramdeobaba College Of Engineering And Management (Nagpur)", "Sri Sairam Engineering College (Chennai)", "Cummins College of Engineering for Women (Pune)", "Faculty Of Engineering, DIT University (Dehradun)", "Sanjivani Rural Education Society's College Of Engineering (Ahmednagar)", "SDM College Of Engineering & Technology (Dharwad)", "Pimpri Chinchwad College Of Engineering (Pune)", "M V J College Of Engineering (Bangalore)", "Sir M Visvesvaraya Institute Of Technology (Bangalore)", "The Northcap University (Gurgaon)", "Rajagiri School Of Engineering & Technology (Ernakulam)", "Indraprastha Institute Of Information Technology Delhi (New Delhi)", "National Institute Of Science & Technology (Berhampur)", "Muffakham Jah College Of Engineering And Technology (Hyderabad)", "JSS Academy Of Technical Education (Bangalore)", "Army Institute Of Technology (Pune)", "Amity School Of Engineering & Technology (Noida)", "Lovely Professional University (Phagwara)", "JIS College Of Engineering (Kalyani, West Bengal)", "IMS Engineering College (Ghaziabad)", "P.E.S. College Of Engineering (Mandya)", "Lakshmi Narain College Of Technology (Bhopal)", "Sikkim Manipal Institute Of Technology (Sikkim)", "Ganeshi Lal Bajaj Institute Of Technology & Management (Noida)", "SCMS School Of Engineering & Technology (Ernakulam)", "Kongu Engineering College (Erode)", "K.S.R. College Of Enginnering (Thiruchengode)", "Maharashtra Institute Of Technology (Aurangabad)", "Sri Sairam College of Engineering (Bangalore)", "J.B. Institute Of Technology (Dehradun)", "Jaipur Engineering College And Research Center (Jaipur)", "R.M.K. Engineering College (Kavaripettai)", "S.A. Engineering College (Chennai)", "University Institute Of Engineering & Technology, Panjab University (Chandigarh)", "Kuppam Engineering College (Kuppam)", "Asia Pacific Institute of Information Technology (APIIT SD) (Panipat)", "Malla Reddy College of Engineering & Technology (Secunderabd)", "CVR College Of Engineering (Hyderabad)", "Veltech High Tech Dr .Rangarajan Dr. Sakunthala Engineering College (Chennai)", "Vishwakarma Institute of Technology (Pune)", "M.S. Engineering College (Bangalore)", "R.M.D. Engineering College (Thiruvallur)", "Rajarambapu Institute Of Technology (Sangli)", "Shri Vishnu Engineering College For Women (Bhimavaram)", "Government College Of Engineering (Karad)", "Institute Of Engineering & Technology, J.K.Lakshmipat University (Jaipur)", "Shri Shankaracharya Technical Campus Bhilai (Bhilai)", "IES College Of Technology (Bhopal)", "Madhav Institute of Technology & Science (Gwalior)", "KIET Group Of Institutions (Ghaziabad)", "BRACT'S Vishwakarma Institute of Information Technology (Pune)", "KLS Gogte Institute Of Technology (Belagavi)"];
const listOfStates = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]
const genderList = ["Male", "Female"];
const skillsList = ["Programming", "Designing", "Coding", "English", "Tutor", "Customer Success", "Motivation", "Football", "Cricket", "Java", "JavaScript", "MongoDB"];
const studentNames = ["Aaren", "Aarika", "Abagael", "Abagail", "Abbe", "Abbey", "Abbi", "Abbie", "Abby", "Abbye", "Abigael", "Abigail", "Abigale", "Abra", "Ada", "Adah", "Adaline", "Adan", "Adara", "Adda", "Addi", "Addia", "Addie", "Addy", "Adel", "Adela", "Adelaida", "Adelaide", "Adele", "Adelheid", "Adelice", "Adelina", "Adelind", "Adeline", "Adella", "Adelle", "Adena", "Adey", "Adi", "Adiana", "Adina", "Adora", "Adore", "Adoree", "Adorne", "Adrea", "Adria", "Adriaens", "Adrian", "Adriana", "Adriane", "Adrianna", "Adrianne", "Adriena", "Adrienne", "Aeriel", "Aeriela", "Aeriell", "Afton", "Ag", "Agace", "Agata", "Agatha", "Agathe", "Aggi", "Aggie", "Aggy", "Agna", "Agnella", "Agnes", "Agnese", "Agnesse", "Agneta", "Agnola", "Agretha", "Aida", "Aidan", "Aigneis", "Aila", "Aile", "Ailee", "Aileen", "Ailene", "Ailey", "Aili", "Ailina", "Ailis", "Ailsun", "Ailyn", "Aime", "Aimee", "Aimil", "Aindrea", "Ainslee", "Ainsley", "Ainslie", "Ajay", "Alaine", "Alameda", "Alana", "Alanah", "Alane", "Alanna", "Alayne", "Alberta", "Albertina", "Albertine", "Albina", "Alecia", "Aleda", "Aleece", "Aleen", "Alejandra", "Alejandrina", "Alena", "Alene", "Alessandra", "Aleta", "Alethea", "Alex", "Alexa", "Alexandra", "Alexandrina", "Alexi", "Alexia", "Alexina", "Alexine", "Alexis", "Alfi", "Alfie", "Alfreda", "Alfy", "Ali", "Alia", "Alica", "Alice", "Alicea", "Alicia", "Alida", "Alidia", "Alie", "Alika", "Alikee", "Alina", "Aline", "Alis", "Alisa", "Alisha", "Alison", "Alissa", "Alisun", "Alix", "Aliza", "Alla", "Alleen", "Allegra", "Allene", "Alli", "Allianora", "Allie", "Allina", "Allis", "Allison", "Allissa", "Allix", "Allsun", "Allx", "Ally", "Allyce", "Allyn", "Allys", "Allyson", "Alma", "Almeda", "Almeria", "Almeta", "Almira", "Almire", "Aloise", "Aloisia", "Aloysia", "Alta", "Althea", "Alvera", "Alverta", "Alvina", "Alvinia", "Alvira", "Alyce", "Alyda", "Alys", "Alysa", "Alyse", "Alysia", "Alyson", "Alyss", "Alyssa", "Amabel", "Amabelle", "Amalea", "Amalee", "Amaleta", "Amalia", "Amalie", "Amalita", "Amalle", "Amanda", "Amandi", "Amandie", "Amandy", "Amara", "Amargo", "Amata", "Amber", "Amberly", "Ambur", "Ame", "Amelia", "Amelie", "Amelina", "Ameline", "Amelita", "Ami", "Amie", "Amii", "Amil", "Amitie", "Amity", "Ammamaria", "Amy", "Amye", "Ana", "Anabal", "Anabel", "Anabella", "Anabelle", "Analiese", "Analise", "Anallese", "Anallise", "Anastasia", "Anastasie", "Anastassia", "Anatola", "Andee", "Andeee", "Anderea", "Andi", "Andie", "Andra", "Andrea", "Andreana", "Andree", "Andrei", "Andria", "Andriana", "Andriette", "Andromache", "Andy", "Anestassia", "Anet", "Anett", "Anetta", "Anette", "Ange", "Angel", "Angela", "Angele", "Angelia", "Angelica", "Angelika", "Angelina", "Angeline", "Angelique", "Angelita", "Angelle", "Angie", "Angil", "Angy", "Ania", "Anica", "Anissa", "Anita", "Anitra", "Anjanette", "Anjela", "Ann", "Ann-Marie", "Anna"]
const courses = ["Industrial Metallurgy","Industrial Microbiology","Industrial Pharmacy","Industrial Product Design","Industrial Safety Engineering","Information and Communication Technology","Information and Cyber security","Information Science and Engineering","Information Security","Information Security and Cyber Forensics","Wood Science and Technology","Yoga","Yoga Therapy","Zoology","Zoology Research"]
const departments = ["Architecture","Arts","Biotechnology","Commerce","Computer Applications","Dental","Design","Economics","Education","Engineering","Physiotherapy","Psychology","Science"];

function generateRandomEmail() {
    const length = getRandomNumberInRange(4, 10);
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    result = result.charAt(0).toUpperCase() + result.slice(1).toLocaleLowerCase();
    return result + '@gmail.com';
}

function getRandomNumberInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomStringFromArray(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem
}

async function createAllColleges() {
    const numberOfColleges = getRandomNumberInRange(95, 105);
    const collegesFunction = [];

    for (let i = 0; i < numberOfColleges; i++) {
        const numberOfStudentsInCurrentCollege = getRandomNumberInRange(80, 120);
        const college = {
            name: getRandomStringFromArray(listOfColleges),
            totalStudents: numberOfStudentsInCurrentCollege,
            email: generateRandomEmail(),
            courses: [getRandomStringFromArray(courses), getRandomStringFromArray(courses), getRandomStringFromArray(courses)],
            departments: [getRandomStringFromArray(departments), getRandomStringFromArray(departments), getRandomStringFromArray(departments)],
            foundedYear: getRandomNumberInRange(1970, 2021),
            addressLine: `Sector ${getRandomNumberInRange(1, 50)}, street no ${getRandomNumberInRange(1, 50)}`,
            city: (getRandomStringFromArray(listOfColleges).split("(")[1]).slice(0, -1),
            state: getRandomStringFromArray(listOfStates),
            country: "India",
            code: getRandomNumberInRange(100000, 999999),
            ratings: getRandomNumberInRange(1, 5)
        };

        collegesFunction.push(addCollege(college));
    }

    await Promise.all(collegesFunction);
}

createAllColleges()

/**
 * Add new college using this function
 */
async function addCollege(data) {
    try {
        const { name, email } = data;

        if (name && email) {
            const college = await collegeService.createCollege(data);

            if (college) {
                const departmensAvailable =  data.departments;

                const studentsFunctionArray = [];
                for (let i = 0; i < data.totalStudents; i++) {
                    const student = {
                        name: getRandomStringFromArray(studentNames),
                        rollNumber: getRandomNumberInRange(2021000, 2021999) + i,
                        age: getRandomNumberInRange(16, 26),
                        gender: getRandomStringFromArray(genderList),
                        email: generateRandomEmail(),
                        batchYear: getRandomNumberInRange(2010, 2021),
                        department: getRandomStringFromArray(departmensAvailable),
                        collegeId: college._id,
                        currentSemester: getRandomNumberInRange(1, 8),
                        cpi: getRandomNumberInRange(4, 10),
                        skills: [getRandomStringFromArray(skillsList), getRandomStringFromArray(skillsList), getRandomStringFromArray(skillsList)],
                        addressLine: `Sector ${getRandomNumberInRange(1, 50)}, street no ${getRandomNumberInRange(1, 50)}`,
                        city: (data.name.split("(")[1]).slice(0, -1),
                        state: getRandomStringFromArray(listOfStates),
                        country: "India",
                        code: getRandomNumberInRange(100000, 999999),
                        ratings: getRandomNumberInRange(1, 5)
                    };
                    studentsFunctionArray.push(addStudent(student));
                }

                await Promise.all(studentsFunctionArray);
            }

            return college;
        }

        console.log('All College data processed successfully');
        return { message: 'name and email are required' };
    } catch (error) {
        console.error(error);
        return { message: 'Error in add new college', error };
    }
};

/**
 * Add new student using this function
 */
async function addStudent(data) {
    try {
        const { name, email, collegeId } = data;

        if (name && email && collegeId) {
            const student = await studentService.createStudent(data);
            return student;
        }

        return { message: 'name, email and collegeId are required' };
    } catch (error) {
        console.error(error);
        return { message: 'Error in add new student', error };
    }
};
