import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [
		// Add the paths to the source code of your project, based on which you want to generate the API here
    {
      name: 'Shared',
      route: 'shared',
      include: 'src/app/shared/**/*.ts',
      exclude: 'src/app/shared/**/*.spec.ts'
    },
    {
      name: 'Features',
      route: 'features',
      include: 'src/app/features/**/*.ts',
      exclude: 'src/app/features/**/*.spec.ts'
    }
	],
};

export default Api;
