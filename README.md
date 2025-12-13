# OneTwoTrim

OneTwoTrim - Trim selected layers to match the last selected layer's in/out points

## Description

An Adobe After Effects script that trims all selected layers to match the in/out points of the last selected layer.

## Installation

1. Download the latest release from the [Releases page](https://github.com/cumuloworks/onetwotrim/releases).
2. In After Effects, go to `File > Scripts > Install Script File...` and select `onetwotrim.jsxbin`.

## Usage

1. Select 2 or more layers in your composition.
2. Run the script.
3. All layers (except the last selected one) will be trimmed to match the last selected layer's in/out points.

## Development

```bash
npm ci
npm run build
```

---

# OneTwoTrim (日本語)

OneTwoTrim - 最後に選択されたレイヤーのin/outポイントに合わせて選択されたレイヤーをトリムする

## 説明

最後に選択されたレイヤーのin/outポイントに合わせて、選択されたすべてのレイヤーをトリムするAdobe After Effects用スクリプトです。

## インストール

1. [リリースページ](https://github.com/cumuloworks/onetwotrim/releases)から最新版をダウンロードしてください。
2. After Effectsで `File > Scripts > Install Script File...` を選択し、`onetwotrim.jsxbin` を選択してください。

## 使用方法

1. コンポジションで2つ以上のレイヤーを選択します。
2. スクリプトを実行します。
3. すべてのレイヤー（最後に選択されたものを除く）が、最後に選択されたレイヤーのin/outポイントに合わせてトリムされます。

## 開発

```bash
npm ci
npm run build
```
