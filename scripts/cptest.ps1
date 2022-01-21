# 解答中のファイル名
$problem_name = $Args[0]
# src\コンテスト階層名
$fileDirname = $Args[1]
# src / コンテスト階層名
$folderDirname,$folderDirname2 = ($fileDirname -split "\\")
# ABCnnn / (a,b,c)
$problem_name_list = ($problem_name -split "_")
# ABCnnn
$base_url = ($problem_name.Replace("_", "-")).Substring(0, ($problem_name.Length) - 2)

# "$problem_name"
# "$fileDirname"
# "$folderDirname"
# "$folderDirname2"
# "$problem_name_list"
# "$base_url"

if (! (Test-Path $folderDirname2/$problem_name)) {
    oj dl -d test/$folderDirname2/$problem_name/ https://atcoder.jp/contests/$base_url/tasks/$problem_name
}

oj test -c "python $folderDirname/$folderDirname2/$problem_name.py" -d test/$problem_name/