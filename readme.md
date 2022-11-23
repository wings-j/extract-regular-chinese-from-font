# extract-regular-chinese-from-font

抽取字体文件中的常用汉字（覆盖日常使用的 99%），以减小字体文件大小。

支持格式：

- ttf
- woff
- woff2

**需要 node >= 14**

常用汉字：[https://github.com/wings-j/extract-regular-chinese-from-font/blob/master/data/regular.txt](https://github.com/wings-j/extract-regular-chinese-from-font/blob/master/data/regular.txt)

## 安装

```sh
npm i --global extract-regular-chinese-from-font
```

## 使用

```sh
extract-regular-chinese-from-font <input> <output>
```

示例：

```sh
extract-regular-chinese-from-font ./input.ttf ./output.ttf
```
