import { Footer } from "../components/footer/footer";
import { Header } from "../components/header";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { students as initialStudents } from "../data/students";
import { AddUserForm } from "../components/form/addUser-form";
import { PlusCircle, UserCheck, Info, Trash } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const Students = () => {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const addStudent = (newStudent) => {
    newStudent.slug = newStudent.name.toLowerCase().replace(/ /g, "-");
    setStudents([...students, newStudent]);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <motion.div
        className="pt-24 pb-32 container mx-auto px-2 max-w-[1400px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Pesquisar estudante..."
            className="block w-1/4 rounded-md bg-gray-200 py-2 px-4 text-gray-900 font-poppins ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <UserCheck
            size={20}
            weight="fill"
            className="absolute left-[575px] font-poppins text-gray-400"
          />
          <div className="flex items-center space-x-2">
            <button
              className="bg-green-600 font-poppins text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-green-700 transition-colors duration-300"
              onClick={() => setIsFormOpen(true)}
            >
              <PlusCircle size={20} weight="fill" className="mr-2" />
              Adicionar Estudante
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-poppins font-semibold">
                  {student.name}
                </h2>
                <span className="text-gray-500 font-poppins text-sm">
                  ID: {student.id}
                </span>
              </div>
              <p className="text-gray-700 font-poppins mb-2">
                <span className="font-medium">Email:</span> {student.email}
              </p>
              <p className="text-gray-700 font-poppins mb-2">
                <span className="font-medium">Idade:</span> {student.age}
              </p>
              <p className="text-gray-700 font-poppins mb-4">
                <span className="font-medium">Sexo:</span> {student.sex}
              </p>
              <div className="flex items-center space-x-2">
                <NavLink
                  to={`/students/${student.id}`}
                  className="bg-[#9089fc] text-white font-poppins px-4 py-2 rounded-lg shadow-sm flex items-center hover:bg-indigo-600 transition-colors duration-300"
                >
                  <Info size={20} weight="fill" className="mr-2" />
                  Mais Detalhes
                </NavLink>
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="bg-red-500 text-white font-poppins px-4 py-2 rounded-lg shadow-sm flex items-center hover:bg-red-600 transition-colors duration-300"
                >
                  <Trash size={20} weight="fill" className="mr-2" />
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>

        {isFormOpen && (
          <AddUserForm
            onClose={() => setIsFormOpen(false)}
            onAddStudent={addStudent}
          />
        )}
      </motion.div>
      <Footer />
    </>
  );
};
