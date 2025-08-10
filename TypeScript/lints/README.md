# Линты

## Описание
Этих линтовых правил я придерживаюсь годами. Первично они были описаны на устаревшем плагине tslint.

В 2025 году наконец появились необходимость и возможность переписать их на современных инструментах, которые стали поддерживать большинство нужных функций — тех самых, которых так не хватало в 2010-х.

Используются следующие библиотеки:
- [eslint](https://eslint.org/) - ядро проверяющее кодовую базу. По умолчанию включает в себя eslint/js - библиотека для проверки JS/TS (команда ESLint стремится сделать ESLint уникальным инструментом, в который можно подключить любые языки).
- [stylistic/eslint-plugin](https://eslint.style/) - плагин для ESLint позволяющий делать проверки оформления кода, раньше была ядром ESLint и typescript-eslint.
- [typescript-eslint](https://typescript-eslint.io/) - плагин для ESLint обеспечивающий поддержку TS.

Наборы линтовых правил и примеры конфигов (с версионированием) лежат в этом [репозитории.](https://github.com/er-ant/er-ant-lints)

Можно использовать отдельно eslint без плагинов и настраивать под себя, переопределяя или расширяя мои правила.

Регулярные выражения и нейминги лучше всего настраивать индивидуально поверх моих правил.

### Angular lint
[Гайд настройки для ангуляра тут.](https://github.com/er-ant/er-ant-dev-notes-RU/blob/main/TypeScript/lints/angular-manual.guide.md)

## Настройка и запуск
### Установка обязательных пакетов
```
npm i eslint@9.27.0 globals --save-dev
```
### Установка плагина stylistic (опционально)
```
npm i @stylistic/eslint-plugin@4.4.0 --save-dev
```
### Установка плагина typescript (опционально)
```
npm i typescript typescript-eslint@8.33.0 --save-dev
```
### Установка репозитория c правилами
```
npm install git+https://github.com/er-ant/er-ant-lints --save-dev
```
### Конфигурационный файл
Добавить конфигурационный файл eslint.config.mjs в корень проекта. Логичнее всего настраивать под каждый проект свой конфиг. Пример:
```
import globals from 'globals';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint';

import { ESLINTRULES } from 'er-ant-lints/eslint/v1/eslint.rules.mjs';
import { STYLISTIC_ESLINTRULES } from 'er-ant-lints/eslint/v1/stylistic.eslint.rules.mjs';
import { TS_ESLINTRULES } from 'er-ant-lints/eslint/v1/ts-eslint.rules.mjs';

export default tseslint.config(
  {
    // какие файлы проверять, для ts лучше делать отдельный объект с настройками
    files: ['src/**/*.ts', 'src/**/*.js'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic
    },
    languageOptions: {
      // Необходимо для поддержки typescript-eslint
      parser: tseslint.parser,
      // Необходимо для запуска на приложении (module) и для скриптов (script) и для nodejs приложений (commonjs)
      sourceType: 'module',
      // Автоматически берет самую актуальную версию, лучше проставлять текущую версию из настроек проекта
      ecmaVersion: 'latest',
      // Подключает глобальные переменные из платформы NodeJS в ESLint
      globals: {
        ...globals.browser,
        ...globals.es2015,
        ...globals.node,
      },
      parserOptions: {
        // Более глубокая проверка типов, но медленнее работает линт
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        // Настройки парсера, надо указать местоположение tsconfig проекта
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      ...ESLINTRULES,
      ...STYLISTIC_ESLINTRULES,
      ...TS_ESLINTRULES
    }
  }
);
```
### Добавить команду для вызова линта в package.json
```
  "lint": "npx eslint ."
```
### Опционально:
- Ознакомиться с "Disputable and configurable code style rules" в наборах правил и настроить под свой проект.
- Настроить подсветку линтов от IDE.

## Работа с правилами линта
> **Автофикс правил - имеет много подводных камней, лучше применять его только для стилистических правил.**
1. Перед обсуждением и изменением необходимо прочесть документацию правила и посмотреть мои коментарии в наборе правил.
1. Отключение линта локально:
```
/* eslint-disable no-alert, no-console */
/* Причина */
/* eslint-enable no-alert, no-console */
```
> Отключение правила лучше согласовать с тимлидом и командой.

### Договоренности:
В Array.reduce переменная аккумулятора должна называться `acc` для правила `no-param-reassign`.

## Заметки
1. TS требует детальной проверки типов, [она замедляет работу линта.](https://typescript-eslint.io/getting-started/typed-linting#performance)
1. При конфигурации правил можно использовать [инспектор.](https://github.com/eslint/config-inspector)
1. По желанию можно настроить [Prettier,](https://prettier.io/docs/install) сторонником которого я не являюсь.

## TODO:
1. Добавить настройки для tsconfig.json
1. Сделать конфиги переиспользуемыми как в официальных гайдах.
1. Сделать гайд по интеграции с Prettier.
