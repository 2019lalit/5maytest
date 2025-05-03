const workLogs = [
  { employee: "Alice", department: "Engineering", hours: 40 },
  { employee: "Bob", department: "Engineering", hours: 38 },
  { employee: "Charlie", department: "Sales", hours: 45 },
  { employee: "David", department: "Engineering", hours: 42 },
  { employee: "Eve", department: "Sales", hours: 50 },
  { employee: "Frank", department: "HR", hours: 35 },
  { employee: "Grace", department: "HR", hours: 40 },
];

const output = {};

workLogs.forEach(log => {
  const { department, hours } = log;


  if (!output[department]) {
    output[department] = {
      totalHours: 0,
      employeeCount: 0,
      avgHours: 0
    };
  }

  output[department].totalHours += hours;
  output[department].employeeCount += 1;
});


for (const department in output) {
  const data = output[department];
  data.avgHours = data.totalHours / data.employeeCount;
}

console.log(output);
