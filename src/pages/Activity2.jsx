import { useState } from "react";
import {
  GraduationCap,
  User,
  Hash,
  AlertCircle,
  RotateCcw,
  Sparkles,
  ThumbsUp,
  Smile,
  Meh,
  Frown,
} from "lucide-react";
//Shanna Audrey Salitorno
function Activity2() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const remarkStyles = {
    Excellent: {
      icon: Sparkles,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      ring: "ring-emerald-200",
      badge: "bg-emerald-500",
      bar: "bg-emerald-500",
    },
    "Very Good": {
      icon: ThumbsUp,
      color: "text-teal-700",
      bg: "bg-teal-50",
      ring: "ring-teal-200",
      badge: "bg-teal-500",
      bar: "bg-teal-500",
    },
    Good: {
      icon: Smile,
      color: "text-blue-700",
      bg: "bg-blue-50",
      ring: "ring-blue-200",
      badge: "bg-blue-500",
      bar: "bg-blue-500",
    },
    Passed: {
      icon: Meh,
      color: "text-amber-700",
      bg: "bg-amber-50",
      ring: "ring-amber-200",
      badge: "bg-amber-500",
      bar: "bg-amber-500",
    },
    Failed: {
      icon: Frown,
      color: "text-red-700",
      bg: "bg-red-50",
      ring: "ring-red-200",
      badge: "bg-red-500",
      bar: "bg-red-500",
    },
  };

  const getRemark = (num) => {
    if (num >= 90) return "Excellent";
    if (num >= 85) return "Very Good";
    if (num >= 80) return "Good";
    if (num >= 75) return "Passed";
    return "Failed";
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    const lettersOnly = value.replace(/[0-9]/g, "");
    setStudentName(lettersOnly);
  };

  const handleEvaluate = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!studentName.trim()) {
      newErrors.studentName = "Student name is required.";
    } else if (/[0-9]/.test(studentName)) {
      newErrors.studentName = "Student name must not contain numbers.";
    }

    if (score.trim() === "") {
      newErrors.score = "Score is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setResult(null);
      return;
    }

    const numericScore = Number(score);

    if (numericScore < 0 || numericScore > 100) {
      setResult({
        name: studentName,
        score: score,
        remark: "Invalid score",
        invalid: true,
      });
      return;
    }

    setResult({
      name: studentName,
      score: numericScore,
      remark: getRemark(numericScore),
      invalid: false,
    });
  };

  const handleClear = () => {
    setStudentName("");
    setScore("");
    setErrors({});
    setResult(null);
  };

  const style = result && !result.invalid ? remarkStyles[result.remark] : null;
  const RemarkIcon = style?.icon;

  return (
    <div className="flex min-h-150 w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#eef2fb] to-[#f4f7fc] px-4 py-10">
      <div className="w-full max-w-sm rounded-[24px] border border-slate-200 bg-white p-7 shadow-xl">

        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-[#f5c400] px-4 py-1.5 text-xs font-bold text-[#001f5b] shadow-sm">
          <GraduationCap size={14} strokeWidth={2.5} />
          <span>Activity 2</span>
        </div>

        <h1 className="text-center text-2xl font-extrabold leading-tight text-[#001f5b]">
          Student Grade Evaluation
        </h1>
        <p className="mt-1.5 text-center text-xs leading-5 text-slate-500">
          Enter a student's name and score to get their remark.
        </p>

        <form onSubmit={handleEvaluate} className="mt-6 space-y-3.5">

          <div>
            <div
              className={`flex items-center gap-2.5 rounded-full bg-[#f4f7fc] px-5 py-3 transition ${
                errors.studentName
                  ? "ring-1 ring-red-400"
                  : "focus-within:ring-1 focus-within:ring-[#003b7a]/30"
              }`}
            >
              <User
                size={16}
                strokeWidth={2.2}
                className="shrink-0 text-[#003b7a]"
              />
              <input
                type="text"
                value={studentName}
                onChange={handleNameChange}
                placeholder="Student Name"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            {errors.studentName && (
              <p className="mt-1 flex items-center gap-1 pl-4 text-xs font-medium text-red-500">
                <AlertCircle size={12} strokeWidth={2.5} />
                {errors.studentName}
              </p>
            )}
          </div>

          <div>
            <div
              className={`flex items-center gap-2.5 rounded-full bg-[#f4f7fc] px-5 py-3 transition ${
                errors.score
                  ? "ring-1 ring-red-400"
                  : "focus-within:ring-1 focus-within:ring-[#003b7a]/30"
              }`}
            >
              <Hash
                size={16}
                strokeWidth={2.2}
                className="shrink-0 text-[#003b7a]"
              />
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="Score (0-100)"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            {errors.score && (
              <p className="mt-1 flex items-center gap-1 pl-4 text-xs font-medium text-red-500">
                <AlertCircle size={12} strokeWidth={2.5} />
                {errors.score}
              </p>
            )}
          </div>

     
          <div className="flex gap-2.5">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#003b7a] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#002b5c] active:scale-[0.98]"
            >
              <span>Evaluate</span>
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center justify-center gap-2 rounded-full bg-[#f4f7fc] px-5 py-3 text-sm font-bold text-[#003b7a] transition hover:bg-slate-200 active:scale-[0.98]"
              aria-label="Clear"
            >
              <RotateCcw size={15} strokeWidth={2.3} />
            </button>
          </div>
        </form>

 
        {result && !result.invalid && (
          <div
            className={`mt-5 overflow-hidden rounded-2xl ring-1 ${style.bg} ${style.ring}`}
          >
            <div className="flex items-center justify-between px-4 pt-4">
              <div className="flex items-center gap-2">
                <div className={`rounded-full p-1.5 ${style.badge}`}>
                  <RemarkIcon
                    size={14}
                    strokeWidth={2.5}
                    className="text-white"
                  />
                </div>
                <span className={`text-sm font-bold ${style.color}`}>
                  {result.remark}
                </span>
              </div>
              <span className={`text-2xl font-extrabold ${style.color}`}>
                {result.score}
              </span>
            </div>

       
            <div className="mx-4 mt-3 h-1.5 w-auto overflow-hidden rounded-full bg-white/70">
              <div
                className={`h-full rounded-full transition-all duration-500 ${style.bar}`}
                style={{ width: `${result.score}%` }}
              />
            </div>

            <div className="mx-4 mt-3.5 border-t border-white/60" />

            <div className="space-y-1.5 px-4 py-3.5 text-xs">
              <p className="flex justify-between">
                <span className="text-slate-500">Student Name</span>
                <span className={`font-semibold ${style.color}`}>
                  {result.name}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Score</span>
                <span className={`font-semibold ${style.color}`}>
                  {result.score} / 100
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Remarks</span>
                <span className={`font-semibold ${style.color}`}>
                  {result.remark}
                </span>
              </p>
            </div>
          </div>
        )}

        {result && result.invalid && (
          <div className="mt-5 flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2.5 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
            <AlertCircle size={16} strokeWidth={2.3} />
            <span>Invalid score. Please enter a value between 0 and 100.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Activity2;
