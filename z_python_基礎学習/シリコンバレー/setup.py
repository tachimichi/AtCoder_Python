from distutils.core import setup

setup(
    name = 'python_programming',
    version = '1.0.0',
    packages = ['section6_package', 'section6_package.talk', 'section6_package.tools'],
    url = 'https://atcoder.jp/users/tachimichi',
    license = 'Free',
    author = 'ogatat',
    author_email = 'ogatat',
    description = 'ogatat',
)


# 下記を実行すると、tarを作成可能
# python .\setup.py sdist