/** @type {import('next').NextConfig} */
module.exports = () => {
    const rewrites = () => {
      return [
        {
          source: "/cats",
          destination: "https://meowfacts.herokuapp.com",
        },
      ];
    };
    return {
      rewrites,
    };
  };

