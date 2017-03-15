# holiday_doctor
野々市市、白山市の休日当番医をシンプルに閲覧できるwebアプリケーション開発レポジトリです。

## プルリクについて
devブランチにプルリクを頂けるとスムーズに確認からmasterブランチへのマージまで出来るのでよろしくお願いします。

## スクレイピング
[石川県休日当番医情報](http://i-search.pref.ishikawa.jp/toban/index.php?a=3)をスクレイパー([PharaohKJ/holiday_doctor_scraper](https://github.com/PharaohKJ/holiday_doctor_scraper))でスクレイプし、その結果を `data.json` に定期更新しています。

## デプロイ
公開はGitHub Pagesを用いて運用しています。更新作業は、毎日0時から1時の間に `pull` > 更新 > `commit` & `push` > `gh-pages` としてcron相当のもので行っています。


## 開発チームとライセンスについて
小野 祐貴(Yuki ONO)　ディベロッパー  
五十川 員申(Kazunobu IKAGAWA)　ディベロッパー  
高木 志宗(Yukimune TAKAGI)　アドバイザー  
山岸浩也(Hiroya YAMAGISHI)　デザイナー  
K.Ishiwatari(@watari3)　ディベロッパー(スクレイパーの実装)  
ふぁらお加藤(@PharaohKJ)　アドバイザー(デプロイ担当)


本アプリ及びソースコードの著作権は、本開発チームに帰属します。 但し、このソースコードはMPLのもと配布されています。MPLに従えば、どなたでも利用、改変、及び再配布が可能です。
