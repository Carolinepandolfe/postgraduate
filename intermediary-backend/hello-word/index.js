import inquirer from "inquirer";

inquirer.prompt(
  [
    {
      type: 'input',
      name: "nome",
      message: "Qual o seu nome?"
    },
    {
      type: 'list',
      name: 'idade',
      message: "Qual sua idade?",
      choices: [
        '29 a 39',
        '40 a 50',
        '50+'
      ]

    }
  ]
).then((answear) => {
  console.log(
    `Oi ${answear.nome} com ${answear.idade} anos de vida`,
  )
})