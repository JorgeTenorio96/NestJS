import { Body, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
import { BaseService } from "./service.commons";

export abstract class BaseController<T> {

    abstract getService(): BaseService<T>;

    @Get('all')
    async findAll() : Promise<T[]> {
        return await this.getService().findAll();
    }

    @Get('find/:id')
    async findOne(@Param('id') id): Promise<T> {
        return await this.getService().findOne(id);
    }


    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return this.getService().delete(id);
    }

    @Get('count')
    async count() : Promise<number> {
        return await this.getService().count();
    }
}