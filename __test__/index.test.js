import request from 'supertest';

import app from "../src/app";


describe("POST",() =>{
   
    // const result = app.post("/api");
    it("should be able to make a post ",async (done)=>{
    const result = await request(app).post("/calculate")
    .send({
        shape: 'circle',
        dimension: 5
    });
    expect(result.status).toBe(201);
    expect(result.body).toEqual({
        shape: 'circle',
        dimension: 5,
        Area: 78.54 
    })
    done()
    })


    it("should be able to make a post ",async (done)=>{
        const result = await request(app).post("/calculate")
        .send({
            shape: 'square',
            dimension: 5
        });
        expect(result.status).toBe(201);
        expect(result.body).toEqual({
            shape: 'square',
            dimension: 5,
            Area: 25 
        })
        done()
        })

        it("should be able to make a post ",async (done)=>{
            const result = await request(app).post("/calculate")
            .send({
                shape: 'rectangle',
                dimension: {
                    length: 5,
                    breadth: 4
                }
            });
            expect(result.status).toBe(201);
            expect(result.body).toEqual({
                shape: 'rectangle',
                dimension: {
                    length: 5,
                    breadth: 4
                },
                Area: 20 
            })
            done()
            })

            it("should be able to make a post ",async (done)=>{
                const result = await request(app).post("/calculate")
                .send({
                    shape: 'triangle',
                    dimension: {
                        length: 5,
                        breadth: 4,
                        height: 3
                    }
                });
                expect(result.status).toBe(201);
                expect(result.body).toEqual({
                    shape: 'triangle',
                    dimension: {
                        length: 5,
                        breadth: 4,
                        height: 3
                    },
                    Area: 6 
                })
                done()
                })


})

describe("fetchRecords", () => {
    it("get", async()=> {
        let result = await request(app).get("/fetchRecords");
        expect(result.status).toBe(200)
    })
})



