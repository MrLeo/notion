/** commit message 校验
 * [commitlint.config.js](https://xuebin.me/993f8e36ad6e410f88f74f01e52e306c#b5fd1b86dde846ef9608b26945b718c2)
 * [Commit Message Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)
 *
 * <type>(<scope>): <short summary>
 *   │       │             │
 *   │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
 *   │       │
 *   │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
 *   │                          elements|forms|http|language-service|localize|platform-browser|
 *   │                          platform-browser-dynamic|platform-server|router|service-worker|
 *   │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
 *   │                          ngcc|ve
 *   │
 *   └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
 * <BLANK LINE>
 * <breaking change description + migration instructions>
 * <BLANK LINE>
 * <BLANK LINE>
 * Fixes #<issue number>
 */
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
        'docs', // 文档更新
        'feat', // 新增功能
        'fix', // bug 修复
        'perf', // 性能优化
        'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
        'style', // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
        'test', // 新增测试用例或是更新现有测试
        'revert', // 回滚某个更早之前的提交
        'chore', // 不属于以上类型的其他类型(日常事务)
        'release',
        'types',
      ],
    ],
  },
}
