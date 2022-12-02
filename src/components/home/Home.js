import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  // const { data: attendances } = useQuery({
  //   queryKey: ["attendances"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/test");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const [attendances, setAttedances] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/test", {
        headers: {
          authorization: `Bearer ${process.env.jwtToken}`,
        },
      })
      .then(function (res) {
        console.log(res);
        setAttedances(res.data);
      });
  }, []);

  return (
    <div>
      <img src={logo} alt="" />
      <h2 className="text-xl lg:text-3xl bg-[#1678CB] w-[300px] lg:w-[480px] mx-auto text-center text-white py-2 lg:py-4">
        Attendance Information
      </h2>
      <div className="overflow-x-auto mt-24  mx-auto">
        <table className="table w-full  text-center">
          <thead>
            <tr>
              <th>Date</th>
              <th className="w-40 text-left">Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {attendances?.map((att, i) => (
              <tr key={i}>
                <td className="py-8">{att.date}</td>
                <td className="w-40 text-left">{att.name}</td>
                <td>{att.status}</td>
              </tr>
            ))} */}
            <tr>
              <td className="py-8">11/7/16</td>
              <td className="w-40 text-left">Arlene McCoy</td>
              <td>Present</td>
            </tr>
            <tr>
              <td className="py-8">2/11/12</td>
              <td className="w-40 text-left">Eleanor Pena</td>
              <td>Absent</td>
            </tr>
            <tr>
              <td className="py-8">4/21/12</td>
              <td className="w-40 text-left">Wade Warren</td>
              <td>Present</td>
            </tr>
            <tr>
              <td className="py-8">8/15/17</td>
              <td className="w-40 text-left">Jacob Janes</td>
              <td>Absent</td>
            </tr>
            <tr>
              <td className="py-8">6/19/14</td>
              <td className="w-40 text-left">Darlene Robertson</td>
              <td>Present</td>
            </tr>
            <tr>
              <td className="py-8">6/21/19</td>
              <td className="w-40 text-left">Floyd Miles</td>
              <td>Absent</td>
            </tr>
            <tr>
              <td className="py-8">5/19/12</td>
              <td className="w-40 text-left">Ralph Edwards</td>
              <td>Present</td>
            </tr>
            <tr>
              <td className="py-8">5/7/16</td>
              <td className="w-40 text-left">Lesile Alexander</td>
              <td>Absent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
