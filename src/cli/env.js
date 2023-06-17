const prefix = 'RSS_';

const parseEnv = () => {
  const partsArray = Object.entries(process.env).reduce((result, [key, value]) => {
    if (key.startsWith(prefix)) {
      result.push(`${key}=${value}`);
    }
    
    return result;
  }, []);

  const output = partsArray.join('; ');
  console.log(output);
};

parseEnv();
