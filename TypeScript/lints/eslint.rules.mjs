export const ESLINTRULES = {
  // Basic code logic rules
  // TODO: recheck on this
  "array-callback-return": ["warn", {
    "allowImplicit": true,
  }],
  "constructor-super": ["error"],
  "for-direction": ["error"],
  "getter-return": ["error", {
    "allowImplicit": true
  }],
  "no-class-assign": ["error"],
  "no-compare-neg-zero": ["error"],
  "no-cond-assign": ["error", "always"],
  "no-const-assign": ["error"],
  "no-constant-binary-expression": ["error"],
  "no-constant-condition": ["error"],
  "no-constructor-return": ["error"],
  "no-control-regex": ["error"],
  "no-debugger": ["error"],
  "no-dupe-args": ["error"],
  "no-dupe-class-members": ["error"],
  "no-dupe-else-if": ["error"],
  "no-dupe-keys": ["error"],
  "no-duplicate-case": ["error"],
  "no-duplicate-imports": ["error"],
  "no-empty-character-class": ["error"],
  "no-empty-pattern": ["error"],
  "no-ex-assign": ["error"],
  "no-fallthrough": ["error"],
  "no-inner-declarations": ["error", "both"],
  "no-invalid-regexp": ["error"],
  "no-irregular-whitespace": ["error"],
  "no-loss-of-precision": ["error"],
  "no-misleading-character-class": ["error"],
  "no-new-native-nonconstructor": ["error"],
  // You shouldn't work with prototype directly, so you can allow this rule
  "no-prototype-builtins": ["off"],
  "no-self-assign": ["error"],
  "no-self-compare": ["error"],
  "no-sparse-arrays": ["error"],
  "no-template-curly-in-string": ["error"],
  "no-unassigned-vars": ["error"],
  "no-unexpected-multiline": ["error"],
  "no-unmodified-loop-condition": ["error"],
  "no-unreachable": ["error"],
  "no-unreachable-loop": ["error"],
  "no-unsafe-finally": ["error"],
  "no-unsafe-optional-chaining": ["error"],
  "no-unused-private-class-members": ["error"],
  "no-unused-vars": ["error"],
  "no-use-before-define": ["error", {
    "functions": false,
    "classes": true,
    "variables": true,
    "allowNamedExports": false
  }],
  "no-useless-assignment": ["off"],
  "no-useless-backreference": ["error"],
  "require-atomic-updates": ["error"],
  "use-isnan": ["error"],
  "valid-typeof": ["error"],
  // TS handled code logic rules
  "no-func-assign": ["error"],
  "no-import-assign": ["error"],
  "no-obj-calls": ["error"],
  "no-setter-return": ["error"],
  "no-this-before-super": ["error"],
  "no-undef": ["error"],
  "no-unsafe-negation": ["error"],
  // Promises code logic rules
  "no-async-promise-executor": ["error"],
  "no-await-in-loop": ["error"],
  "no-promise-executor-return": ["error"],

  // Average code style rules
  "accessor-pairs": ["error"],
  // Turned off as it wants developers to unwrap array, this reduces readability
  "arrow-body-style": ["off", "as-needed", {
    "requireReturnForObjectLiteral": true
  }],
  "block-scoped-var": ["error"],
  // You need to decide on proper serialization for this rule
  "camelcase": ["error", {
    "ignoreDestructuring": true,
    "ignoreImports": true,
    "ignoreGlobals": true
  }],
  "class-methods-use-this": ["off"],
  "consistent-return": ["off"],
  "consistent-this": ["error", "that"],
  "curly": ["error"],
  "default-case": ["error"],
  "default-case-last": ["error"],
  "default-param-last": ["error"],
  "dot-notation": ["error"],
  "eqeqeq": ["error"],
  "func-name-matching": ["error"],
  "func-names": ["error", "always", {
    "generators": "as-needed"
  }],
  "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
  "grouped-accessor-pairs": ["error", "getBeforeSet"],
  "guard-for-in": ["off"],
  "init-declarations": ["off"],
  "logical-assignment-operators": ["error"],
  "new-cap": ["error"],
  "no-alert": ["error"],
  "no-array-constructor": ["error"],
  "no-caller": ["error"],
  "no-case-declarations": ["off"],
  "no-console": ["error"],
  "no-continue": ["error"],
  "no-delete-var": ["error"],
  "no-div-regex": ["error"],
  "no-else-return": ["error"],
  "no-empty": ["error", {
    "allowEmptyCatch": true
  }],
  "no-empty-function": ["error", {
    "allow": ["arrowFunctions", "generatorFunctions", "methods", "generatorMethods", "constructors", "privateConstructors", "protectedConstructors", "overrideMethods"]
  }],
  "no-empty-static-block": ["error"],
  "no-eval": ["error"],
  "no-extend-native": ["error"],
  "no-extra-bind": ["error"],
  "no-extra-boolean-cast": ["error"],
  "no-extra-label": ["error"],
  "no-global-assign": ["error"],
  "no-implicit-globals": ["off"],
  "no-implied-eval": ["error"],
  "no-inline-comments": ["error"],
  "no-iterator": ["error"],
  "no-label-var": ["error"],
  "no-labels": ["error"],
  "no-lone-blocks": ["error"],
  "no-lonely-if": ["error"],
  "no-loop-func": ["error"],
  "no-magic-numbers": ["off", {
    "ignoreArrayIndexes": true,
    "ignoreDefaultValues": true,
    "ignoreClassFieldInitialValues": true,
    "enforceConst": true
  }],
  "no-multi-assign": ["error"],
  "no-multi-str": ["off"],
  "no-negated-condition": ["error"],
  "no-nested-ternary": ["error"],
  "no-new": ["error"],
  "no-new-func": ["error"],
  "no-new-wrappers": ["error"],
  "no-nonoctal-decimal-escape": ["error"],
  "no-object-constructor": ["error"],
  "no-octal": ["error"],
  "no-octal-escape": ["error"],
  // IMPORTANT. Functions cannot change pointer and should produce new object (like a factory).
  // But they still can change properties of objects passed as arguments.
  // Reduce requires to rewrite, so I added exception variable name.
  "no-param-reassign": ["error", {
    "props": true,
    "ignorePropertyModificationsFor": ["acc"]
  }],
  "no-plusplus": ["off"],
  "__proto__": ["error"],
  "no-redeclare": ["error"],
  "no-regex-spaces": ["error"],
  "no-return-assign": ["error"],
  "no-script-url": ["error"],
  "no-sequences": ["error"],
  "no-shadow": ["error", {
    "builtinGlobals": false,
    "hoist": "functions",
    "allow": [],
    "ignoreOnInitialization": false
  }],
  "no-shadow-restricted-names": ["error"],
  "no-ternary": ["off"],
  "no-throw-literal": ["error"],
  "no-undef-init": ["error"],
  // Undefined means was never defined, null means empty
  "no-undefined": ["error"],
  // Have issues, when you need to have getter and setter with same name it will trigger
  "no-underscore-dangle": ["off"],
  "no-unneeded-ternary": ["error"],
  "no-unused-expressions": ["error"],
  "no-unused-labels": ["error"],
  "no-useless-call": ["error"],
  "no-useless-catch": ["error"],
  "no-useless-computed-key": ["error"],
  "no-useless-concat": ["error"],
  // I feel ok with constructor placeholder
  "no-useless-constructor": ["off"],
  "no-useless-escape": ["error"],
  "no-useless-rename": ["error"],
  // TODO: recheck on this
  "no-useless-return": ["warn"],
  "no-var": ["error"],
  "no-void": ["error"],
  "no-with": ["error"],
  "object-shorthand": ["error"],
  "one-var": ["error", "never"],
  "operator-assignment": ["error", "always"],
  "prefer-arrow-callback": ["error"],
  "prefer-const": ["error", {
    "destructuring": "any",
    "ignoreReadBeforeAssign": true
  }],
  "prefer-exponentiation-operator": ["off"],
  "prefer-named-capture-group": ["error"],
  "prefer-numeric-literals": ["off"],
  "prefer-promise-reject-errors": ["error"],
  "prefer-regex-literals": ["off"],
  "prefer-rest-params": ["error"],
  "prefer-spread": ["error"],
  "prefer-template": ["error"],
  "radix": ["error", "as-needed"],
  "require-await": ["error"],
  "require-unicode-regexp": ["off"],
  "require-yield": ["error"],
  "sort-vars": ["off"],
  // Usually I develop ESM (strict is default mode)
  "strict": ["off"],
  "symbol-description": ["error"],
  "vars-on-top": ["off"],
  "yoda": ["error", "never", {
    "exceptRange": true
  }],
  // TS handled code style rules
  "no-invalid-this": ["error"],
  // Disputable code style rules
  "capitalized-comments": ["error"],
  "complexity": ["off", 3],
  "id-denylist": ["off"],
  "id-length": ["off"],
  "id-match": ["off"],
  "max-classes-per-file": ["error", 2],
  // TODO: recheck on this
  "max-depth": ["warn", 6],
  "max-lines": ["off", {
    "max": 2,
    "skipBlankLines": true,
    "skipComments": true
  }],
  "max-lines-per-function": ["off", {
    "max": 2,
    "skipBlankLines": true,
    "skipComments": true
  }],
  "max-params": ["error", 6],
  "max-statements": ["off"],
  "no-bitwise": ["error", {
    "allow": ["~"]
  }],
  "no-implicit-coercion": ["off"],
  "no-restricted-exports": ["off"],
  "no-restricted-globals": ["off"],
  "no-restricted-imports": ["off"],
  "no-restricted-properties": ["off"],
  "no-restricted-syntax": ["off"],
  "no-warning-comments": ["off"],
  "prefer-destructuring": ["off"],
  "prefer-object-has-own": ["off"],
  "prefer-object-spread": ["off"],
  "sort-imports": ["error", {
    "ignoreCase": true,
    "ignoreDeclarationSort": true,
    "ignoreMemberSort": false,
    "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
    "allowSeparatedGroups": true
  }],
  "sort-keys": ["off"],
}
