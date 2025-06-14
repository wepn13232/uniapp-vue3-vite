module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended', // 使用推荐的eslint
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
        requireConfigFile: false,
        parser: '@typescript-eslint/parser',
    },
    // eslint-plugin-vue
    plugins: [
        '@typescript-eslint',
        '@stylistic/eslint-plugin-ts',
        'vue', // 引入vue的插件 vue <==> eslint-plugin-vue
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        wx:true,
        uni:true
    },
    // 这里时配置规则的,自己看情况配置
    rules: {
        '@typescript-eslint/no-explicit-any': ['off'], // 禁止any类型
        'no-console': 'off', // 禁止出现console
        'no-debugger': 'warn', // 禁止出现debugger
        'no-duplicate-case': 'warn', // 禁止出现重复case
        'no-empty': 'warn', // 禁止出现空语句块
        'no-extra-parens': 'warn', // 禁止不必要的括号
        'no-func-assign': 'warn', // 禁止对Function声明重新赋值
        'no-unreachable': 'warn', // 禁止出现[return|throw]之后的代码块
        'no-else-return': 'warn', // 禁止if语句中return语句之后有else块
        'no-empty-function': 'warn', // 禁止出现空的函数块
        'no-lone-blocks': 'warn', // 禁用不必要的嵌套块
        'no-multi-spaces': 'warn', // 禁止使用多个空格
        'no-redeclare': 'warn', // 禁止多次声明同一变量
        'no-return-assign': 'warn', // 禁止在return语句中使用赋值语句
        'no-return-await': 'warn', // 禁用不必要的[return/await]
        'no-self-compare': 'warn', // 禁止自身比较表达式
        'no-useless-catch': 'warn', // 禁止不必要的catch子句
        'no-useless-return': 'warn', // 禁止不必要的return语句
        'no-mixed-spaces-and-tabs': 'error', // 禁止空格和tab的混合缩进
        'no-multiple-empty-lines': 'warn', // 禁止出现多行空行
        'no-trailing-spaces': 'warn', // 禁止一行结束后面不要有空格
        'no-useless-call': 'warn', // 禁止不必要的.call()和.apply()
        'no-var': 'warn', // 禁止出现var用let和const代替
        'no-delete-var': 'off', // 允许出现delete变量的使用
        'no-shadow': 'off', // 允许变量声明与外层作用域的变量同名
        'dot-notation': 'warn', // 要求尽可能地使用点号
        'default-case': 'warn', // 要求switch语句中有default分支
        eqeqeq: 'warn', // 要求使用 === 和 !==
        'space-before-blocks': ['warn', 'always'], // 要求在块之前使用一致的空格
        'space-in-parens': 'warn', // 要求在圆括号内使用一致的空格
        'space-infix-ops': 'warn', // 要求操作符周围有空格
        'space-unary-ops': ["error", {"words": true, "nonwords": false,}], // 要求在一元操作符前后使用一致的空格
        'switch-colon-spacing': 'warn', // 要求在switch的冒号左右有空格
        'arrow-spacing': ["error", {"before": true, "after": true}], // 要求箭头函数的箭头前后使用一致的空格
        'array-bracket-spacing': 'warn', // 要求数组方括号中使用一致的空格
        'brace-style': ["error", "1tbs", {"allowSingleLine": true}], // 要求在代码块中使用一致的大括号风格
        'key-spacing': ['warn', {'beforeColon': false, 'afterColon': true}], //要求在键值对中冒号前后使用一致的空格
        camelcase: 'warn', // 要求使用骆驼拼写法命名约定
        indent: ['error', 2], // 强制要求使用JS一致缩进4个空格（2个tab）
        // 要求html标签的缩进为需要4个空格（2个tab）
        'vue/html-indent': [
            'error',
            2,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'max-depth': ['warn', 4], // 要求可嵌套的块的最大深度4
        'max-statements': ['warn', 100], // 要求函数块最多允许的的语句数量20
        'max-nested-callbacks': ['warn', 3], // 要求回调函数最大嵌套深度3
        'max-statements-per-line': [
            'warn',
            {
                max: 1,
            },
        ], // 要求每一行中所允许的最大语句数量
        'vue/require-default-prop': 0, // 关闭属性参数必须默认值
        'vue/singleline-html-element-content-newline': 0, // 关闭单行元素必须换行符
        'vue/multiline-html-element-content-newline': 0, // 关闭多行元素必须换行符
        // 要求每一行标签的最大属性不超五个
        'vue/max-attributes-per-line': [
            'warn',
            {
                singleline: 5,
            },
        ],
        // 取消关闭标签不能自闭合的限制设置
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/multi-word-component-names': [
            'warn',
            {
                ignores: ['index'],
            },
        ],
        "vue/no-setup-props-destructure": "warn", //是否允许直接结构props（会丢失响应性），建议使用toRefs
        "vue/v-on-event-hyphenation": "off", //是否强制绑定事件（on）进行命名分割
        "@typescript-eslint/no-unused-vars": "error", //不可以定义未使用的变量（官方默认error会导致使用vue-tsc构建失败）
        "object-curly-spacing": ["error", "always"], // 要求花括号内使用一致的空格
        "template-curly-spacing": ["error", "always"], // 要求模板字符串中空格一致
        "@stylistic/ts/type-annotation-spacing": ["warn", {"before": false, "after": true}], // 要求类型注解中空格一致
        "vue/attribute-hyphenation": 'off', // 关闭属性命名使用驼峰命名
        "curly":"error",
        "@typescript-eslint/no-empty-object-type":0,
    },
}
