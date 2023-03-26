# Template for Backend Express

The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Scripts

| command               | description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| `npm start`           | starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch` | runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`            | runs the tests once                                                                 |
| `npm run test:watch`  | continually watches and runs the tests when files are updated                       |

### Database Setup Commands

All the following commands can be run on the local database or the test database. To run them on the test database, append `:test` to the command
| command | description |
| --------------------- | ----------------------------------------------------------------------------------- |
| `npm run db:reset` | drops, creates and seeds the database locally |
| `npm run db:drop` | drops the database locally |
| `npm run db:setup` | creates the database locally |
| `npm run db:seed` | seeds the database locally |

### Heroku Setup

Add your Postgres add-on and set the environment variable `PGSSLMODE` to `require`. Then in your terminal run `npm run heroku:setup -- -a <name of your heroku app>` This should run the setup sql on your production postgres.
