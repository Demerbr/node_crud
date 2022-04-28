import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterVideosAddURL1651163495788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "videos",
            new TableColumn({
                name: "url",
                type: "varchar",
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("videos", "url")
    }

}
