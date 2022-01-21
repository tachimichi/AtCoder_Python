# 解答中のファイル名
$problem_name = $Args[0]
# src\コンテスト階層名\カレントのコンテスト名
$fileDirname = $Args[1]
# src / コンテスト階層名 / カレントのコンテスト名
$src,$folderBitween,$folderCurrent = ($fileDirname -split "\\")
# ABCnnn / (a,b,c)
# $problem_name_list = ($problem_name -split "_")
# ABCnnn
$base_url = ($problem_name.Replace("_", "-")).Substring(0, ($problem_name.Length) - 2)

"$problem_name"
"$src"
"$folderBitween"
"$folderCurrent"
# "$problem_name_list"
"$base_url"

if (! (Test-Path $folderBitween/$folderCurrent/$problem_name)) {
    oj dl -d test/$folderBitween/$folderCurrent/$problem_name/ https://atcoder.jp/contests/$base_url/tasks/$problem_name
}

oj test -c "python $src/$folderBitween/$folderCurrent/$problem_name.py" -d test/$folderBitween/$folderCurrent/$problem_name/