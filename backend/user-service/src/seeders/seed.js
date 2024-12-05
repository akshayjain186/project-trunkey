// const sequelize = require('../../config/database');
// const seedRoles = require('./role-seeder'); // Adjust path if incorrect

// (async () => {
//   try {
//     await sequelize.authenticate(); // Ensure the database connection works
//     console.log('Database connected successfully.');

//     await seedRoles(); // Run the seeder
//     console.log('Seeding completed successfully!');
//   } catch (error) {
//     console.error('Error during seeding:', error);
//   } finally {
//     await sequelize.close(); // Close the database connection
//   }
// })();
const { getEmojiFlag } = require('countries-list');
const { continents, countries } = require('countries-list'); // package countries ,continents
const { sequelize } = require('../../config/database');
const Continent = require('../models/continentsModel');
const Country = require('../models/countriesModel');
const Currency = require('../models/currencyModel');
const Language = require('../models/languagesModel');
const iso6391 = require('iso-639-1'); // ISO 639-1 package
const currencyCodes = require('currency-codes'); // Currency codes package
const seedRoles = require('./role-seeder'); 
// const seedProjectManageRole = require('./seedProjectManageRole');
// const seedCategoriesAndSubcategories = require('./seedCategoriesAndSubcategories');


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful!');

    await sequelize.sync({ force: true }); 
    console.log('Database synchronized!');

    // Insert continents
    const continentMap = {};
    for (const [code, name] of Object.entries(continents)) {
      const continent = await Continent.create({ code, name });
      continentMap[code] = continent.id;
    }

    // Insert languages
    const languageSet = new Set();
    for (const data of Object.values(countries)) {
      if (data.languages) {
        for (const lang of data.languages) {
          if (!languageSet.has(lang)) {
            const languageName = iso6391.getName(lang)
; 

            await Language.create({
              code: lang,
              name: languageName || lang, 
            });
            languageSet.add(lang)
;
          }
        }
      }
    }

    console.log('Language data inserted successfully!');

    // Insert currencies
    const currencySet = new Set();
    for (const data of Object.values(countries)) {
      if (data.currency) {
        const currencies = Array.isArray(data.currency) ? data.currency : [data.currency];
        for (const currencyCode of currencies) {
          if (!currencySet.has(currencyCode)) {
            const currency = currencyCodes.code(currencyCode);
            const currencyName = currency ? currency.currency : currencyCode;

            await Currency.create({
              currencycode: currencyCode,
              name: currencyName,
            });

            currencySet.add(currencyCode);
          }
        }
      }
    }

    console.log('Currency data inserted successfully!');

    // Insert countries
    for (const [code, data] of Object.entries(countries)) {
        const flag = getEmojiFlag(code);
      
        try {
          await Country.create({
            code: code,
            name: data.name,
            emoji: flag,
            continentId: continentMap[data.continent],
          });
          console.log(`Country ${data.name} inserted successfully.`);
        } catch (error) {
          console.error(`Error inserting country ${data.name}:`, error);
        }
      }   
      await seedProjectManageRole();
      await seedCategoriesAndSubcategories();
      await seedRoles();
   

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await sequelize.close();
  }
})();