 # smoker's クライアント側Webアプリ

## 環境構築
### 開発環境構築
 プロジェクトに参加した方は下記手順で環境構築をお願いします。

 nodeのverは8系か10系推奨です。
 
 (※ 利用しているfirebaseがnode8 or 10しかサポートしていないため。)

 1. `git pull` で最新のソースを取得
 2. プロジェクトルートディレクトリに移動
 3. `npm i`にて必要なライブラリの取得
 
 起動方法は従来どおり`npm start`にてローカルサーバを立ち上げて動作確認する

### IDEの設定
 VSCodeの方は下記tslintの設定を有効にする設定をONにしてください。
 
 1. マーケットプレイスにて、Typescript, TSLintの追加パッケージを入れる
 2. VSCodeのsetting.jsonに下記を追記(基本のESLintの設定をONにしています)
 ```
 {
   // エディタの自動整形機能は Off にしておく
   "editor.formatOnSave": false,
   "editor.formatOnPaste": false,
   "editor.formatOnType": false,
 
   // 拡張機能が提供している自動整形のプロパティ
   // ファイル保存時に tslint.json のルールに則って自動整形する
   "editor.codeActionsOnSave": {
     "source.fixAll.tslint": true
   }
 }
 ```
---

## アプリケーション構成
スマホ向けWebアプリケーションをPWAとして作成し、iOSアプリ、Androidアプリとして公開します。

基本的には Node.js + Typescriptで開発し、クライアントサイドではフレームワークにReact + Reduxを利用します。

サーバレス環境にはGCP（Firebase）を採用し、
それぞれクライアントサイドはFirebase Hosting, サーバサイドはFirebase Cloud functionsにdeployします。

### クライアント
 * React (hooks)
 * Typescript
 * Redux
 * react-router-dom (ルーティング管理)
 * firebase client SDK
 * firebase Hosting (サーバレス)

### サーバサイド
 * Node.js
 * Typescript
 * firebase admin SDK
 * Firebase cloud functions (サーバレス)
 
### 認証基盤
 * Firebase Authentication

### DB
 * Firebase cloud firestore
 
### ストレージ
 * Firebase cloud storage

---

## コーディング規約的なもの
### ディレクトリ構成
画面系のviewは`screens`に、ビジネスロジックは`services`に、  
APIコール(cloud functionsへの）は`lib/firebsae/functions`にファイルを作成して管理する。
```
src
├- components (共通コンポーネントクラス）
├- dictionary (ディクショナリ定義クラス)
├- lib (外部ライブラリ用クラス）
├- redux (Redux設定クラス）
├- screens (画面用クラス)
├- services (ビジネスロジッククラス)
├- styles (共通スタイルクラス)
└- types (型定義クラス）
```
細かいディレクトリ構成内の決まりごとはそれぞれのディレクトリ以下のREADMEを参照してください。

### 型定義について
#### **any禁止!!**（大原則）
下記のように型定義は定義する場所を使い分ける

* アプリ内で共通で利用するもの  
    `src/types`以下に必要に応じてディレクトリで大分類を分けて定義ファイルを作成する
    
* 特定の画面内でのみ利用するもの  
    特定の画面、コンポーネント内のtsxファイル内に直接定義する
    
* ライブラリに依存するもの  
    適宜lib以下に定義する

* DBのカラム定義（今回はfirestoreのデータ構造）  
    `src/firebase/firestore/reference/`以下にcollectionごとに定義ファイルを作る
    
例) 基本形

```
interface ExampleObj {
    name: string;
    email: string;
    photoUrl: string;
    count: number;
    favListId: string[];
}
```

例) 型定義内のObject型の要素も別で型定義を行う
```
interface ExampleObj2 {
    address: AddressObj;
}

interface AddressObj {
    zipCode: string;
    prefecture: string:
    city: string;
    other: string;
}
```