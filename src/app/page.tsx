import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>ページ一覧</h1>
      <div>
        <h2>
          <Link href="/movies">映画一覧</Link>
        </h2>
        <p>
          container componentとpresentation
          componentsに分けるパターンを試すために作成したページ
        </p>
      </div>
      <div>
        <h2>
          <Link href="/staff">スタッフ一覧</Link>
        </h2>
        <p>テーブルでのソートを試すためのページ</p>
      </div>
    </main>
  );
}
