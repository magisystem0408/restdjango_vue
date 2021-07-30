## エラー報告

- 以下のようなエラーが出る
- asset = assets['assets'][chunk]
KeyError: 'assets'

https://stackoverflow.com/questions/67915361/keyerror-at-assets-and-modulenotfounderror-no-module-named-webpack-loader

- 解決策

django-webpack-loader==0.7.0
- バージョンを下げたらうまくいった。