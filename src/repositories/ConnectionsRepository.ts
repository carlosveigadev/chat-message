import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connectio> {
}

export { ConnectionsRepository };