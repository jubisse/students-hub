import { Footer } from "../components/footer/footer";
import { Header } from "../components/header";
import { useParams } from "react-router-dom";
import { students } from "../data/students";
import { motion } from "framer-motion";
import {
  XCircle,
  Envelope,
  Calendar,
  GenderFemale,
  GenderMale,
  UserCircleCheck,
} from "@phosphor-icons/react";

export const StudentsDetails = () => {
  const { id } = useParams();
  const student = students.find((student) => student.id === parseInt(id, 10));

  return (
    <>
      <Header />
      <motion.main
        className="bg-gray-100 min-h-screen pt-20 pb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto p-4 max-w-4xl">
          {student ? (
            <motion.div
              className="bg-white w-[400px] mx-auto rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <UserCircleCheck
                size={32}
                weight="fill"
                className="text-green-500 mx-auto"
              />
              <h1 className="text-2xl font-light font-poppins mb-4 text-gray-800 border-b border-b-gray-700">
                {student.name}
              </h1>
              <div className="flex flex-col justify-start mx-auto items-center mb-4">
                <Envelope
                  size={24}
                  weight="fill"
                  className="mr-2 text-indigo-500"
                />
                <p className="text-sm text-gray-600 font-poppins font-bold">
                  {student.email}
                </p>
              </div>
              <div className="flex flex-col justify-start mx-auto items-center mb-4">
                <Calendar
                  size={24}
                  weight="fill"
                  className="mr-2 text-indigo-500"
                />
                <p className="text-sm text-gray-600 font-poppins font-bold">
                  {student.age} anos
                </p>
              </div>
              <div className="flex flex-col justify-start mx-auto items-center mb-4">
                {student.sex === "Female" ? (
                  <GenderFemale
                    size={24}
                    weight="fill"
                    className="mr-2 text-indigo-500"
                  />
                ) : (
                  <GenderMale
                    size={24}
                    weight="fill"
                    className="mr-2 text-indigo-500"
                  />
                )}
                <p className="text-sm text-gray-600 font-poppins font-bold">
                  {student.sex}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50%] bg-gray-100 p-24"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <XCircle
                size={72}
                weight="fill"
                className="text-red-500 mb-4 mx-auto"
              />
              <h1 className="text-4xl font-bold text-gray-600 mb-2 uppercase">
                Estudante Não Encontrado!
              </h1>
            </motion.div>
          )}
        </div>
      </motion.main>
      <Footer />
    </>
  );
};
