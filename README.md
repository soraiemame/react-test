# これは何？

これはreact.jsの学習のために初めて作ったプロジェクトです。
[この記事](https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048)を参考にしました。

# 一番詰まったところ

自動リフレッシュが効かなかったのがめっちゃ辛かった。
解決方法は `webpack.config.js` の `devServer` を指定してあげること。

```
$ npm run dev
```
でserveできる。
