import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterVideosAddUserId1651274092977 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "videos",
            new TableColumn({
                name: "user_id",
                type: "uuid"
            })
            
            
            )
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("videos", "user_id")
    }

}
