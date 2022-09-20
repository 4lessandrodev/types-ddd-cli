import alias from 'module-alias';
import { resolve } from 'node:path';

alias.addAlias('@types', resolve(__dirname, 'interfaces','index'));
alias.addAlias('@lib', resolve(__dirname, 'lib'));
alias.addAlias('@commands', resolve(__dirname, 'commands'));
alias.addAlias('@actions', resolve(__dirname, 'actions'));
alias.addAlias('@ui', resolve(__dirname, 'ui'));
alias.addAlias('@', resolve(__dirname));
