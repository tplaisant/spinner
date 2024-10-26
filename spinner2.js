let animation = "|/-\\|/-\\|";
let timer = 0;

for (let i = 0; i < animation.length; i++) {  
  setTimeout(() => {
    process.stdout.write(`\r${animation[i]}   `);
  }, timer);
  timer += 300;
};