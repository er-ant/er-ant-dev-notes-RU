# Линты

## Описание
Этих линтовых правил я придерживаюсь годами. Первично они были описаны на устаревшем плагине tslint.

В 2025 наконец появились необходимость и возможность переписать их с современными инструментами, которые стали поддерживать много необходимых функций.

Используются следующие библиотеки:
- [eslint](https://eslint.org/) 9.27.0 - ядро проверяющее кодовую базу
- eslint/js 9.27.0 - библиотека для проверки JS/TS (команда ESLint стремится сделать ESLint уникальным инструментом, в который можно подключить любые языки)
- [stylistic/eslint-plugin](https://eslint.style/) 4.4.0 - плагин для ESLint позволяющий делать проверки оформления кода, раньше была ядром ESLint и typescript-eslint
- [typescript-eslint](https://typescript-eslint.io/) 8.33.0 - плагин для ESLint обеспечивающий поддержку TS

Наборы линтовых правил лежат в папке lints.

Файл с настройками для IDE в корне репозитория [.editorconfig](https://github.com/er-ant/er-ant-dev-notes-RU/blob/main/.editorconfig).

Можно использовать отдельно eslint без плагинов и настраивать под себя, переопределяя мои правила.

Идеальная связка это линтеры + форматтер, который автоматически форматирует код по НЕКОТОРЫМ правилам.

### Prettier [In progress]
Скорее всего в дальнейшем будет настроен Prettier. Референсы:
- https://prettier.io/docs/install
- https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/flat-configs/typescript.ts
- https://advancedfrontends.com/eslint-flat-config-typescript-javascript/

### Логика формирования правил
Каждое правило проверялось руками, но всеравно могут быть неточности.
> Правила, в работе которых я не уверен помечены как warn (в дальнейшем будут настроены off или error).

В файлах с линтовыми правилами есть коментарии:
- пояснения конфигурации правила
- разбиты на группы правил
- добавлен блок для обсуждаемых правил (Disputable code style rules), которые могут отличаться у каждого проекта

Регулярные выражения и нейминги лучше всего настраивать индивидуально поверх моих правил.

## Настройка и запуск
### Установка обязательных пакетов
```
  npm i eslint@9.27.0 @eslint/js@9.27.0
```
### Установка плагина stylistic (опционально)
```
  npm i @stylistic/eslint-plugin@4.4.0
```
### Установка плагина typescript (опционально)
```
  npm i typescript typescript-eslint@8.33.0
```
### Установка этого репозитория для использования правил
```
  npm install git+https://github.com/er-ant/er-ant-dev-notes-RU.git
```
### Конфигурационный файл
Добавить конфигурационный файл eslint.config.js в корень проекта. Логичнее всего настраивать под каждый проект свой конфиг. Пример:
```
import eslint from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint';

import { ESLINTRULES } from 'er-ant-dev-notes-RU/TypeScript/lints/eslint.rules.mjs';
import { STYLISTIC_ESLINTRULES } from 'er-ant-dev-notes-RU/TypeScript/lints/stylistic.eslint.rules.mjs';
import { TS_ESLINTRULES } from 'er-ant-dev-notes-RU/TypeScript/lints/ts-eslint.rules.mjs';

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
      // Необходимо для запуска на приложении
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
### Настройка IDE
Также необходимо сделать дополнительную настройку IDE при сохранении файла (ctrl + s):
- trim whitespaces
- add EOL
Это можно сделать скопировав [.editorconfig](https://github.com/er-ant/er-ant-dev-notes-RU/blob/main/.editorconfig) в корень проекта или настроив IDE вручную.
### Опционально:
Ознакомиться с "Disputable code style rules" в наборах правил и настроить под свой проект.

## Работа с правилами линта
> **Автофикс правил - имеет много подводных камней, лучше применять его только для стилистических правил.**
1. Перед обсуждением и изменением необходимо прочесть документацию правила и посмотреть мои коментарии в наборе правил.
1. Отключение линта локально:
```
/* eslint-disable no-alert, no-console */
/* Причина */
/* eslint-enable no-alert, no-console */
```
> Отключение правила лучше согласовать с тимлидом и командой

### Договоренности:
В Array.reduce переменная аккумулятора должна называться `acc` для правила `no-param-reassign`.

## Заметки
1. TS требует детальной проверки типов, [она замедляет работу линта](https://typescript-eslint.io/getting-started/typed-linting#performance).
1. При конфигурации правил можно использовать [инспектор](https://github.com/eslint/config-inspector).

## TODO:
1. Добавить прекоммит.
1. Добавить форматтер для кода.
1. Добавить гайд по настройке линта для IDE.
1. Сделать конфиги переиспользуемыми как в официальных гайдах.
1. Оптимизировать работу линта по [гайду](https://typescript-eslint.io/troubleshooting/typed-linting/performance/).
