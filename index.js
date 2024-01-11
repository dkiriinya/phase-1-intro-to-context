// Your code here
function createEmployeeRecord(arr){
    const employee = {
        firstName : arr[0],
        familyName : arr[1],
        title : arr[2],
        payPerHour : arr[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employee
}

function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(arr => createEmployeeRecord(arr))

}

function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employeeRecord.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour, 10),
      date: date,
    });
  
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ')
     employeeRecord.timeOutEvents.push({
        type:'TimeOut',
        hour: parseInt(hour,10),
        date: date,
    })
    
    return employeeRecord
}
function hoursWorkedOnDate(employeeRecord,date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date == date)
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date ==date)

    if(timeInEvent && timeOutEvent){
        const timeIn = timeInEvent.hour ;
        const timeOut = timeOutEvent.hour ;
        let result = timeOut - timeIn
        
        if (result>100){
            function numberToArray(num) {
                return num.toString().split('').map(Number);
            }
            let array = numberToArray(result)
            // console.log(array)
            let newarray = array.slice(0,-2)
            // console.log(newarray)
            result = parseInt(newarray.join(''))
            
            
        }
        
        return result 

    }
    return 0

}
function wagesEarnedOnDate (employeeRecord, date = null){
    const noOfHours = hoursWorkedOnDate(employeeRecord,date)
    const payPerHour = employeeRecord.payPerHour;
    const payAmount = noOfHours * payPerHour
    console.log(payAmount)

    return payAmount

}


function allWagesFor(employeeRecord){
    return employeeRecord.timeInEvents.reduce((totalWages, timeInEvent) => {
        // Calculate wages for each date and add to the total
        return totalWages + wagesEarnedOnDate(employeeRecord, timeInEvent.date);
    }, 0);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => {
        return totalPayroll + allWagesFor(employeeRecord);
    }, 0);
}

// // Create an employee record for Julius Caesar
// const cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27]);

// // Log time-in and time-out events for different days
// createTimeInEvent(cRecord, "0044-03-14 0900");
// createTimeOutEvent(cRecord, "0044-03-14 2100");

// createTimeInEvent(cRecord, "0044-03-15 0900");
// createTimeOutEvent(cRecord, "0044-03-15 1100");

// // Calculate the total wages for all worked days
// const totalWages = allWagesFor(cRecord);

// // Log the result
// console.log(`Total wages for Julius Caesar: $${totalWages}`);
// Create employee records
// const employee1 = createEmployeeRecord(["John", "Doe", "Manager", 25]);
// const employee2 = createEmployeeRecord(["Jane", "Smith", "Developer", 20]);

// // Log time-in and time-out events for different days for employee1
// createTimeInEvent(employee1, "2024-01-01 0900");
// createTimeOutEvent(employee1, "2024-01-01 1700");

// createTimeInEvent(employee1, "2024-01-02 1000");
// createTimeOutEvent(employee1, "2024-01-02 1800");

// // Log time-in and time-out events for different days for employee2
// createTimeInEvent(employee2, "2024-01-01 0800");
// createTimeOutEvent(employee2, "2024-01-01 1600");

// createTimeInEvent(employee2, "2024-01-02 0900");
// createTimeOutEvent(employee2, "2024-01-02 1700");

// // Create an array of employee records
// const employees = [employee1, employee2];

// // Calculate the total payroll for all employees
// const totalPayroll = calculatePayroll(employees);

// // Log the result
// console.log(`Total payroll for all employees: $${totalPayroll}`);


// const employeeRecord = createEmployeeRecord(['John', 'Doe', 'Developer', 25]);


// console.log(totalWages); // Output: Total wages for the week based on the provided date


// const dateStampIn = '2024-01-11 0900';
// const dateStampOut = '2024-01-11 2100';

// createTimeInEvent(employeeRecord, dateStampIn);
// createTimeOutEvent(employeeRecord, dateStampOut);

// const hoursWorked = hoursWorkedOnDate(employeeRecord, '2024-01-11');
// console.log(hoursWorked);

// const dateStamp = '2024-01-11 1700';

// createTimeOutEvent(employeeRecord, dateStamp);
// console.log(employeeRecord);
  
// createTimeInEvent(employeeRecord, dateStamp);
// console.log(employeeRecord);
  
// const arrayOfArrays = [
//     ['John', 'Doe', 'Developer', 25],
//     ['Jane', 'Smith', 'Designer', 30],
// ];
// const employeeRecords = createEmployeeRecords(arrayOfArrays);
// console.log(employeeRecords);


// console.log(totalPayroll);
  

// // console.log(createEmployeeRecord("John", "Doe", "Developer", 25))
