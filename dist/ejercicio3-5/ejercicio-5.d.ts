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
declare class MySqlUserRepository {
    findById(id: string): {
        id: string;
        name: string;
    } | null;
}
declare class UserService {
    private repo;
    getUserName(id: string): string;
}
/**
 * Diseño refactorizado para cumplir con los principios SOLID
 */
interface UserRepository {
    findById(id: string): {
        id: string;
        name: string;
    } | null;
}
declare class MySqlUserRepository2 implements UserRepository {
    findById(id: string): {
        id: string;
        name: string;
    } | null;
}
declare class UserService2 {
    private repo;
    constructor(repo: UserRepository);
    getUserName(id: string): string;
}
