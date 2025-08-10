# Линты для ангуляра

> Принципы работы с линтом для TypeScript применимы и здесь, для полноты информации лучше ознакомиться с [базовыми настройками линтеров](https://github.com/er-ant/er-ant-dev-notes-RU/tree/main/TypeScript/lints).

Гайд по ручной настройке линтов для проекта на ангуляре. 

Архитектура:
- Принцип настройки аналогичный с tsconfig. Есть 1 глобальный конфиг в корне и можно кастомизировать под каждый проект, указывая что использовать в angular.json.
- Ангуляр сам запускает линты, сперва ангуляр берет файлы, а eslint выбирает какие настройки к каким файлам применять.

Базируется на пакете angular-eslint, включащим в себя eslint, typescript-eslint.

Лучше всего настраивать вместе с общими правилами для TS. 

Библиотека globals не нужна, т.к. экосистема angular предоставляет глобальные переменные.

## Настройка и запуск
### Установка обязательных пакетов
```
npm i angular-eslint@20.1.1 --save-dev
```
### Установка плагина stylistic
```
npm i @stylistic/eslint-plugin@4.4.0 --save-dev
```
### Установка репозитория c правилами
```
npm install git+https://github.com/er-ant/er-ant-lints --save-dev
```
### Конфигурационный файл
Добавить конфигурационный файл eslint.config.mjs в корень проекта. Логичнее всего настраивать под каждый проект свой конфиг. Пример:
```
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import angularESlint from 'angular-eslint';

import { ESLINTRULES } from 'er-ant-lints/eslint/v1/eslint.rules.mjs';
import { STYLISTIC_ESLINTRULES } from 'er-ant-lints/eslint/v1/stylistic.eslint.rules.mjs';
import { TS_ESLINTRULES } from 'er-ant-lints/eslint/v1/ts-eslint.rules.mjs';
import { ANGULAR_ESLINTRULES } from 'er-ant-lints/angular-eslint/v1/angular.eslint.rules.mjs';
import { ANGULAR_TEMPLATE_ESLINTRULES } from 'er-ant-lints/angular-eslint/v1/angular-template.eslint.rules.mjs';

export default tseslint.config(
  {
    // files signature for check
    files: ["**/*.ts"],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
      '@angular-eslint': angularESlint.tsPlugin
    },
    processor: angularESlint.processInlineTemplates,
    languageOptions: {
      // Required for typescript-eslint support
      parser: tseslint.parser,
      // Required for app launch (module) and for scripts (script) and for nodejs app (commonjs)
      sourceType: 'module',
      // Takes last actual version, better use project' version
      ecmaVersion: 'latest',
      parserOptions: {
        // Deeper typecheck, but performance is lower
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        // TSConfig for parser, please provide your project config
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      ...ESLINTRULES,
      ...STYLISTIC_ESLINTRULES,
      ...TS_ESLINTRULES,
      ...ANGULAR_ESLINTRULES
    }
  },
  {
    files: ["**/*.html"],
    plugins: {
      '@angular-eslint/template': angularESlint.templatePlugin
    },
    languageOptions: {
      parser: angularESlint.templateParser,
    },
    rules: {
      ...ANGULAR_TEMPLATE_ESLINTRULES
    },
  }
);


```
### Обновить angular.json
Т.к. папка где лежит ангуляр проект(-ы) является workspace, необходимо сконфигурировать настройки линта для конкретного проекта по адресу: `projects -> projectName -> architect -> lint`. 
```
  "lint": {
    "builder": "@angular-eslint/builder:lint",
    "options": {
      "eslintConfig": "eslint.config.mjs",
      "lintFilePatterns": [
        "src/app/**/*.html", <-- укажите папки проекта для проверки
        "src/app/**/*.ts" <-- укажите папки проекта для проверки
      ]
    }
  }
```
[Полный список настроек тут](https://github.com/angular-eslint/angular-eslint/blob/8d3709ee9f4dff07f6616e6bf5486da06677f715/packages/builder/src/schema.json). 

### Добавить команду для вызова линта в package.json
```
  "lint": "ng lint"
```
### Опционально:
- Ознакомиться с "Disputable and configurable code style rules" в наборах правил и настроить под свой проект.
- Настроить подсветку линтов от IDE.
