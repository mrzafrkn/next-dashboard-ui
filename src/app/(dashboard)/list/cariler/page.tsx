import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { cariData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Cari = {
  id: number;
  cariId: string;
  name: string;
  vkn: number;
  email?: string;
  photo: string;
  phone: string;
  address: string[];
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Cari ID",
    accessor: "cariId",
    className: "hidden md:table-cell",
  },
  {
    header: "VKN",
    accessor: "cariVkn",
    className: "hidden md:table-cell",
  },
  {
    header: "E-mail",
    accessor: "cariEmail",
    className: "hidden md:table-cell",
  },
  {
    header: "Telefon",
    accessor: "cariTelefon",
    className: "hidden lg:table-cell",
  },
  {
    header: "Adres",
    accessor: "cariAdres",
    className: "hidden lg:table-cell",
  },
  {
    header: "Aksiyonlar",
    accessor: "aksiyonlar",
  },
];

const CarilerListPage = () => {
  const renderRow = (item: Cari) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell ">{item.cariId}</td>
      <td className="hidden md:table-cell  ">{item.vkn}</td>
      <td className="hidden md:table-cell ">{item.email}</td>
      <td className="hidden md:table-cell ">{item.phone}</td>
      <td className="hidden md:table-cell ">{item.address.join(",")}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/cariler/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Cariler</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={cariData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default CarilerListPage;
