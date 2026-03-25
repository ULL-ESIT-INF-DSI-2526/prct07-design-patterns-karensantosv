export abstract class ExamCorrector {
    
    // template method
    public correctExam() {
        this.loadStudentAnswers();
        this.loadCorrectionTemplate();
        const score = this.calculateScore();
        const feedback = this.generateFeedback(score);  
        this.customComments();
        console.log(`Nota final: ${score}. Feedback: ${feedback}`);
    }

    protected loadStudentAnswers() {
        console.log("Respuestas del alumno cargadas.");
    }

    protected loadCorrectionTemplate() {
        console.log("Plantilla de corrección cargada.");
    }

    protected abstract calculateScore(): number;

    protected abstract generateFeedback(score: number): string;

    protected customComments() {
        console.log(`Comentarios personalizados`);
    }

}

export class MultipleChoiceExamCorrector extends ExamCorrector {
    public calculateScore(): number {
        return 85; 
    }

    public generateFeedback(score: number): string {
        return score >= 60 ? "¡Buen trabajo!" : "Necesitas mejorar.";
    }

    public customComments() {
        console.log("Revisa las preguntas para mejorar tu comprensión.");
    }
}

export class TrueFalseExamCorrector extends ExamCorrector {
    public calculateScore(): number {
        return 70; 
    }

    public generateFeedback(score: number): string {
        return score >= 60 ? "¡Buen trabajo!" : "Necesitas mejorar.";
    }
}

export class ShortAnswerExamCorrector extends ExamCorrector {
    public calculateScore(): number {
        return 90; 
    }

    public generateFeedback(score: number): string {
        return score >= 60 ? "¡Excelente!" : "Necesitas mejorar.";
    }
}

console.log("Corrección de examen de opción múltiple:");
const multipleChoiceCorrector = new MultipleChoiceExamCorrector();
multipleChoiceCorrector.correctExam();

console.log("\nCorrección de examen de verdadero/falso:");
const trueFalseCorrector = new TrueFalseExamCorrector();
trueFalseCorrector.correctExam();

console.log("\nCorrección de examen de respuesta corta:");
const shortAnswerCorrector = new ShortAnswerExamCorrector();
shortAnswerCorrector.correctExam();