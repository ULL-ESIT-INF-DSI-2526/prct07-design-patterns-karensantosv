import { describe, test, expect } from "vitest";
import { ExamCorrector } from "../../src/ejercicio-7/examCorrector.js";
import { MultipleChoiceExamCorrector } from "../../src/ejercicio-7/examCorrector.js";
import { TrueFalseExamCorrector } from "../../src/ejercicio-7/examCorrector.js";
import { ShortAnswerExamCorrector } from "../../src/ejercicio-7/examCorrector.js";

describe("ExamCorrector", () => {
    test(" seleccion multiple ", () => {
        const corrector = new MultipleChoiceExamCorrector();
        corrector.correctExam();
        expect(corrector).toBeInstanceOf(MultipleChoiceExamCorrector);
        // caso en que falla
        const failingCorrector = new MultipleChoiceExamCorrector();
        failingCorrector.calculateScore = () => 50;
        failingCorrector.correctExam();
        expect(failingCorrector).toBeInstanceOf(MultipleChoiceExamCorrector);
    });

    test(" verdadero o falso ", () => {
        const corrector = new TrueFalseExamCorrector();
        corrector.correctExam();
        expect(corrector).toBeInstanceOf(TrueFalseExamCorrector);
        // caso en que falla
        const failingCorrector = new TrueFalseExamCorrector();
        failingCorrector.calculateScore = () => 50;
        failingCorrector.correctExam();
        expect(failingCorrector).toBeInstanceOf(TrueFalseExamCorrector);
    });

    test(" respuesta corta ", () => {
        const corrector = new ShortAnswerExamCorrector();
        corrector.correctExam();
        expect(corrector).toBeInstanceOf(ShortAnswerExamCorrector);
        // caso en que falla
        const failingCorrector = new ShortAnswerExamCorrector();
        failingCorrector.calculateScore = () => 50;
        failingCorrector.correctExam();
        expect(failingCorrector).toBeInstanceOf(ShortAnswerExamCorrector);
    });
});