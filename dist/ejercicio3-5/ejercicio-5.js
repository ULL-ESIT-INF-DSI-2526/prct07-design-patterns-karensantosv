/**
 * ¿Por qué este diseño dificulta cambiar MySQL por otro almacenamiento y testear UserService sin base de datos?
 * Porque UserService depende directamente de MySqlUserRepository.
 *
 * Principios SOLID violados:
 * - Dependency Inversion Principle: UserService depende de una implementación concreta (MySqlUserRepository).
 *                                   Si se quiere testear se obliga a tener una implementacion de mySqluserrepository.
 * - Single Responsibility Principle: UserService tiene la responsabilidad de gestionar usuarios con getusername y también de acceder a la base de datos al crear private repo.
 *
 */
class MySqlUserRepository {
    findById(id) {
        console.log("Querying MySQL...");
        return { id, name: "Ada" };
    }
}
class UserService {
    repo = new MySqlUserRepository();
    getUserName(id) {
        const user = this.repo.findById(id);
        if (!user)
            throw new Error("User not found");
        return user.name.toUpperCase();
    }
}
class MySqlUserRepository2 {
    findById(id) {
        console.log("Querying MySQL...");
        return { id, name: "Ada" };
    }
}
class UserService2 {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    getUserName(id) {
        const user = this.repo.findById(id);
        if (!user)
            throw new Error("User not found");
        return user.name.toUpperCase();
    }
}
