##

## プロジェクト作成
- django-admin startproject <プロジェクト名> .

## マイグレート
- python3 manage.py migrate

## データベース設計を終えた後マイグレートを作る
- python3 manage.py makemigrate

## アプリケーション作成
- python3 manage.py startapp <アプリ名>

## 管理者権限のメールアドレスを作成
- python manage.py createsuperuser

## requirements.txtを排出させる
- pip freeze > requirement.txt