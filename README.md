# Lord of the rings SDK

## Install

    npm install vitalii-mishchenko-sdk
## Usage

The module can be imported and used in your code as:
```javascript
import { LotrSdk } from 'vitalii-mishchenko-sdk';

const lotrSdk = new LotrSdk('your-api-key');

// Get all books list
const books = lotrSdk.getMoviesList().then((response) => console.log(response));

// Get one specific book
const book = lotrSdk.getMoviesList.get('5cf5805fb53e011a64671582', {
  page: 5,
  limit: 5,
  sort: {
    selector: 'name',
    order: 'asc'
  }
});

/* Supported params:
{
  limit?: number;
  page?: number;
  offset?: number;
  sort?: Sort;
}
*/
```
