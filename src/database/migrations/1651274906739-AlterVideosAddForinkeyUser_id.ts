import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AlterVideosAddForinkeyUserId1651274906739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "videos",
            new TableForeignKey({
                name: "fk_videos_user",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
