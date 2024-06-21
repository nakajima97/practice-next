import { StaffList } from "@/features/StaffList/components/StaffList";
import { StaffListOnHTMLTable } from "@/features/StaffList/components/StaffListOnHTMLTable";

const Page = () => {
  return (
    <div>
      <h1>Staff Page</h1>
      <p>テーブルのソートを学習するために作成したページ</p>
      <p>ソートのボタンには共通でMUIのTableSortLabelを使った</p>
      <h2>MUIで作成したテーブル</h2>
      <StaffList />
      <h2>HTMLで作成したテーブル</h2>
      <StaffListOnHTMLTable />
    </div>
  );
};

export default Page;
