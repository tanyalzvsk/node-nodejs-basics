const parseArgs = () => {
  const argVars = process.argv.slice(2);
  const formattedVars = [];

  for (let i = 0; i < argVars.length; i += 2) {
    const key = argVars[i].slice(2);
    const value = argVars[i + 1];
    formattedVars.push([key, value]);
  }

  formattedVars.forEach(([key, value]) => console.log(`${key} is ${value}`));
};

parseArgs();
